import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import CollectionsGrid from "./CollectionsGrid";
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
        <div className="w-full min-h-screen bg-white">
            <div>
                <HeroBanner />
            </div>

            <CollectionsGrid />
            
            <div className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col justify-center items-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-sans font-medium text-black text-center luxury-heading">
                        Explore a Selection of the Maison's Creations
                    </h2>
                </div>

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-red-500 text-3xl mr-2"/>
                        <span className="text-gray-500 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
                        {products && 
                            products?.slice(0,4).map((item, i) => <ProductCard key={i} {...item} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;
