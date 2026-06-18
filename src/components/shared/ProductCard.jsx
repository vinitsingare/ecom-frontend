import { useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductCard = ({
        productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice,
        about = false,
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    };

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };

    return (
        <div className="group flex flex-col w-full bg-white relative">
            {/* Image Container */}
            <div onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }} 
                className="w-full overflow-hidden aspect-square bg-[#f9f9f9] relative cursor-pointer flex items-center justify-center p-6 md:p-10"
            >
                <img 
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    src={image}
                    alt={productName}
                />
                
                {/* Minimal Overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-black bg-white px-8 py-3 text-xs uppercase tracking-widest font-medium shadow-sm transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
                        Quick View
                    </span>
                </div>
                
                {/* Discount badge */}
                {discount > 0 && (
                    <div className="absolute top-0 left-0 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1 m-4">
                        {discount}% OFF
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="pt-4 pb-4 flex flex-col items-start text-left">
                <h2 onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }}
                    className="text-xs md:text-[13px] font-medium mb-[2px] cursor-pointer text-gray-800 hover:text-black hover:underline underline-offset-4 decoration-1">
                    {truncateText(productName, 40)}
                </h2>
                
                { !about && (
                    <div className="flex flex-col items-start justify-center w-full">
                        {specialPrice ? (
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 line-through text-xs md:text-[13px]">
                                    ${Number(price).toFixed(2)}
                                </span>
                                <span className="text-xs md:text-[13px] font-semibold text-black">
                                    ${Number(specialPrice).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-xs md:text-[13px] font-semibold text-black">
                                ${Number(price).toFixed(2)}
                            </span>
                        )}
                    </div>
                )}
            </div>
            
            <ProductViewModal 
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    )
}

export default ProductCard;
