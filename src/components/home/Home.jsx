import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-screen">
            <div className="py-6">
                <HeroBanner />
            </div>
            
            <div className="py-10">
                <div className="flex flex-col justify-center items-center space-y-3 mb-10">
                    <h1 className="text-4xl font-bold">
                        <span className="gradient-text">Featured Products</span>
                    </h1>
                        <span className="text-gray-400 text-lg">
                            Discover our handpicked selection of top-rated items just for you!
                        </span>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                    
                </div>

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-red-500 text-3xl mr-2"/>
                        <span className="text-gray-300 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
            <div className="pb-6 pt-6 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-8 gap-x-6">
                       {products && 
                       products?.slice(0,4)
                                .map((item, i) => <ProductCard key={i} {...item} />
                        )}
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Home;
