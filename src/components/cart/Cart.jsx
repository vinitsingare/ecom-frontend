import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemContent from "./ItemContent";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    const newCart = { ...cart };

    newCart.totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity), 0
    );

    if (!cart || cart.length === 0) return <CartEmpty />;

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10 min-h-screen">
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold flex items-center gap-3">
                  <span className="gradient-text">Your Cart</span>
                  <MdShoppingCart size={36} className="text-purple-500" />
                </h1>
                <p className="text-lg text-gray-500 mt-2">All your selected items</p>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-4 font-semibold items-center dark-card py-4 px-4">
                <div className="md:col-span-2 justify-self-start text-lg text-gray-300 lg:ps-4">
                    Product
                </div>

                <div className="justify-self-center text-lg text-gray-300">
                    Price
                </div>

                <div className="justify-self-center text-lg text-gray-300">
                    Quantity
                </div>

                <div className="justify-self-center text-lg text-gray-300">
                    Total
                </div>
            </div>

            <div className="space-y-4 mt-4">
                {cart && cart.length > 0 &&
                    cart.map((item, i) => <ItemContent key={i} {...item}/>)}
            </div>

            <div className="border-t border-dark-light mt-8 pt-6 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-6">
                <div></div>
                <div className="flex text-sm gap-2 flex-col dark-card p-6 rounded-xl">
                    <div className="flex justify-between w-full md:text-xl text-lg font-bold">
                        <span className="text-gray-300">Subtotal</span>
                        <span className="gradient-text">{formatPrice(newCart?.totalPrice)}</span>
                    </div>

                    <p className="text-gray-500 text-sm">
                        Taxes and shipping calculated at checkout
                    </p>

                    <Link className="w-full flex justify-end mt-2" to="/checkout">
                    <button
                        onClick={() => {}}
                        className="font-semibold w-full py-3 px-6 rounded-full btn-gradient text-white flex items-center justify-center gap-2 hover:shadow-purple-500/40 transition duration-300">
                        <MdShoppingCart size={20} />
                        Proceed to Checkout
                    </button>
                    </Link>

                    <Link className="flex gap-2 items-center mt-3 text-gray-500 hover:text-purple-400 transition-colors justify-center" to="/products">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
