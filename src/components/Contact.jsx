import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return(
        <div
            className="flex flex-col items-center justify-center min-h-screen py-12">
            
            <div className="dark-card shadow-2xl rounded-2xl p-10 w-full max-w-lg gradient-border">
                <h1 className="text-4xl font-bold text-center mb-4">
                    <span className="gradient-text">Contact Us</span>
                </h1>
                <p className="text-gray-500 text-center mb-8">
                    We would love to hear from you! Please fill out the form below or contact us directly
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                        </label>
                        <input 
                            type="text"
                            required
                            className="w-full border border-dark-light bg-dark-card text-white rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300"/>
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input 
                            type="email"
                            required
                            className="w-full border border-dark-light bg-dark-card text-white rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea 
                            rows="4"
                            required
                            className="w-full border border-dark-light bg-dark-card text-white rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300"/>
                    </div>

                    <button className="w-full btn-gradient text-white py-3 rounded-full hover:shadow-purple-500/40 transition-all duration-300 font-semibold">
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
                    <div className="flex flex-col items-center space-y-3">
                        <div className="flex items-center">
                            <FaPhone className="text-purple-500 mr-3"/>
                            <span className="text-gray-400">+91 9322810026</span>
                        </div>

                        <div className="flex items-center">
                            <FaEnvelope className="text-purple-500 mr-3"/>
                            <span className="text-gray-400">vinitsingare05@gmail.com</span>
                        </div>

                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-purple-500 mr-3"/>
                            <span className="text-gray-400">Maharashtra , India</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;
