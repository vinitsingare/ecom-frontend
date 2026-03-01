import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "../../store/actions";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";
import truncateText from "../../utils/truncateText";

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId,
  }) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const handleQtyIncrease = (cartItems) => {
        dispatch(increaseCartQuantity(
            cartItems,
            toast,
            currentQuantity,
            setCurrentQuantity
        ));
    };

    const handleQtyDecrease = (cartItems) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(cartItems, newQuantity));
        }
    };

    const removeItemFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems, toast));
    };
    
    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border border-dark-light dark-card rounded-xl lg:px-6 py-5 p-3 transition-all duration-300 hover:border-purple-500/50">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-3">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-2 items-start">
                   <h3 className="lg:text-[17px] text-sm font-semibold text-gray-300">
                    {truncateText(productName)}
                   </h3>
                </div>

                <div className="md:w-36 sm:w-24 w-20">
                    <img 
                        src={`${import.meta.env.VITE_BACK_END_URL}/images/${image}`}
                        alt={productName}
                        className="md:h-36 sm:h-24 h-20 w-full object-cover rounded-lg"/>
                

                <div className="flex items-start gap-3 mt-4">
                    <button
                        onClick={() => removeItemFromCart({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })}
                        className="flex items-center font-semibold space-x-2 px-4 py-2 text-xs border border-rose-500/50 text-rose-400 rounded-lg hover:bg-rose-500/20 transition-all duration-200">
                        <HiOutlineTrash size={16} className="text-rose-400"/>
                        <span>Remove</span>
                    </button>
                    </div>
                </div>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm text-gray-400 font-semibold">
                {formatPrice(Number(specialPrice))}
            </div>

            <div className="justify-self-center">
                <SetQuantity 
                    quantity={currentQuantity}
                    cardCounter={true}
                    handeQtyIncrease={() => handleQtyIncrease({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity,
                    })}
                    handleQtyDecrease={() => {handleQtyDecrease({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity,
                    })}}/>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm gradient-text font-bold">
                {formatPrice(Number(currentQuantity) * Number(specialPrice))}
            </div>
        </div>
    )
};

export default ItemContent;
