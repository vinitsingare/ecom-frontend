import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../shared/InputField';
import { useDispatch } from 'react-redux';
import { registerNewUser } from '../../store/actions';
import toast from 'react-hot-toast';
import Spinners from '../shared/Spinners';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        console.log("Register Click");
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
     };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center py-12">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-[360px] dark-card py-10 sm:px-10 px-6 rounded-2xl gradient-border">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <FaUserPlus className="text-white text-3xl"/>
                        </div>
                        <h1 className="text-center font-montserrat lg:text-3xl text-2xl font-bold">
                            <span className="gradient-text">Create Account</span>
                        </h1>
                        <p className="text-gray-500 text-sm">Join us and start shopping</p>
                    </div>
            <div className="mt-8 mb-4 flex flex-col gap-4">
                <InputField
                    label="UserName"
                    required
                    id="username"
                    type="text"
                    message="*UserName is required"
                    placeholder="Enter your username"
                    register={register}
                    errors={errors}
                    darkMode={true}
                    />

                <InputField
                    label="Email"
                    required
                    id="email"
                    type="email"
                    message="*Email is required"
                    placeholder="Enter your email"
                    register={register}
                    errors={errors}
                    darkMode={true}
                    />

                <InputField
                    label="Password"
                    required
                    id="password"
                    min={6}
                    type="password"
                    message="*Password is required"
                    placeholder="Enter your password"
                    register={register}
                    errors={errors}
                    darkMode={true}
                    />
            </div>

            <button
                disabled={loader}
                className="btn-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-3 rounded-full my-4 transition-all duration-300 hover:shadow-purple-500/40"
                type="submit">
                {loader ? (
                    <>
                    <Spinners /> Loading...
                    </>
                ) : (
                    <>Sign Up</>
                )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?
              <Link
                className="font-semibold gradient-text ml-1"
                to="/login">
              <span> Login</span></Link>  
            </p>
            </form>
        </div>
    );
}

export default Register
