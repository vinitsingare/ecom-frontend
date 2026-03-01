import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartEmpty = () => {
 return (
    <div className="min-h-[600px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center dark-card p-12 rounded-3xl gradient-border">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                <MdShoppingCart size={50} className="text-purple-400"/>
            </div>
            <div className="text-3xl font-bold text-white mb-2">
                Your cart is empty
            </div>
            <div className="text-lg text-gray-500 mt-2 mb-8">
                Add some products to get started
            </div>
        </div>
        <div className="mt-8">
            <Link
                to="/"
                className="flex gap-2 items-center btn-gradient px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-purple-500/40">
                    <MdArrowBack size={20} />
                    <span>Start Shopping</span>
                </Link>
        </div>
    </div>
 )   
}

export default CartEmpty;
