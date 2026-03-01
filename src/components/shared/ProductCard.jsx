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
        <div className="dark-card group overflow-hidden">
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
                    className="w-full overflow-hidden aspect-3/2 relative">
                <img 
                className="w-full h-full cursor-pointer transition-transform duration-500 transform group-hover:scale-110"
                src={image}
                alt={productName}>
                </img>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white flex items-center gap-2 bg-purple-600/80 px-4 py-2 rounded-full text-sm font-medium">
                        <FaEye /> Quick View
                    </span>
                </div>
                {/* Discount badge */}
                {discount > 0 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {discount}% OFF
                    </div>
                )}
            </div>
            <div className="p-5">
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
                    className="text-lg font-semibold mb-2 cursor-pointer text-gray-100 group-hover:text-purple-400 transition-colors">
                    {truncateText(productName, 50)}
                </h2>
                
                <div className="min-h-20 max-h-20 mb-4">
                    <p className="text-gray-400 text-sm line-clamp-2">
                        {truncateText(description, 80)}
                    </p>
                </div>

            { !about && (
                <div className="flex items-center justify-between">
                {specialPrice ? (
                    <div className="flex flex-col">
                        <span className="text-gray-500 line-through text-sm">
                            ${Number(price).toFixed(2)}
                        </span>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            ${Number(specialPrice).toFixed(2)}
                        </span>
                    </div>
                ) : (
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {"  "}
                        ${Number(price).toFixed(2)}
                    </span>
                )}

                <button
                    disabled={!isAvailable || btnLoader}
                    onClick={() => addToCartHandler({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity,
                    })}
                    className={`btn-gradient ${isAvailable ? "opacity-100" : "opacity-50 cursor-not-allowed"}
                        text-white py-2.5 px-4 rounded-full items-center transition-all duration-300 w-36 flex justify-center gap-2 font-medium text-sm hover:shadow-purple-500/30`}>
                    <FaShoppingCart className="text-sm"/>
                    {isAvailable ? "Add to Cart" : "Stock Out"}
                </button>
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
