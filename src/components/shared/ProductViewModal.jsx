import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

function ProductViewModal({open, setOpen, product, isAvailable}) {
  const {id, productName, image, description, quantity, price, discount, specialPrice} = product;
  const dispatch = useDispatch();
  const [btnLoader, setBtnLoader] = useState(false);

  const addToCartHandler = () => {
      setBtnLoader(true);
      dispatch(addToCart({
          image,
          productName,
          description,
          specialPrice,
          price,
          productId: id,
          quantity,
      }, 1, toast));
      setTimeout(() => setBtnLoader(false), 500); // Simulate network delay
  };

  return (
    <>
      <Dialog open={open} as="div" className="relative z-[100]" onClose={() => setOpen(false)}>
      <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-12">
            <DialogPanel
              transition
              className="relative transform overflow-hidden bg-white shadow-2xl transition-all w-full max-w-5xl flex flex-col md:flex-row min-h-[60vh]"
            >
                {/* Close Button - Mobile (Absolute top right of entire modal) */}
                <button
                    onClick={() => setOpen(false)}
                    className="md:hidden absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md text-black hover:text-gray-600"
                >
                    <RxCross2 className="text-xl" />
                </button>

                {/* Left Side - Image */}
                <div className='w-full md:w-1/2 bg-[#f9f9f9] flex items-center justify-center p-8 md:p-16 min-h-[300px]'>
                    {image && (
                        <img 
                            src={image}
                            alt={productName}
                            className="object-contain w-full h-full mix-blend-multiply max-h-[600px]" 
                        />
                    )}
                </div>

                {/* Right Side - Content */}
                <div className='w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col relative'>
                    {/* Close Button - Desktop */}
                    <button
                        onClick={() => setOpen(false)}
                        className="hidden md:block absolute top-6 right-6 text-black hover:text-gray-500 transition-colors"
                    >
                        <RxCross2 className="text-2xl" />
                    </button>

                    <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs tracking-widest text-gray-500 uppercase">
                                SKU: {id ? String(id).substring(0, 8) : 'M28812'}
                            </span>
                            <button className="text-black hover:text-gray-500 transition-colors mt-1">
                                <FaRegHeart className="text-xl" />
                            </button>
                        </div>
                        
                        <h1 className="text-2xl md:text-3xl font-serif font-medium text-black mb-4 leading-tight">
                            {productName}
                        </h1>

                        <div className="mb-8">
                            {specialPrice ? (
                                <div className="flex items-baseline gap-4">
                                    <span className="text-gray-400 line-through text-lg">
                                        ${Number(price).toFixed(2)}
                                    </span>
                                    <span className="text-xl font-semibold text-black tracking-wide">
                                        ${Number(specialPrice).toFixed(2)}
                                    </span>
                                </div>
                            ) : (
                                <span className="text-xl font-semibold text-black tracking-wide">
                                    ${Number(price).toFixed(2)}
                                </span>
                            )}
                            <p className="text-xs text-gray-500 mt-1">(M.R.P. incl. of all taxes)</p>
                        </div>

                        {/* Dummy Colours Section to match screenshot */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4 text-sm font-medium">
                                <span>Colours</span>
                                <span className="text-gray-500 font-normal">Navy</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-12 h-12 border border-black p-1 cursor-pointer">
                                    <div className="w-full h-full bg-blue-800"></div>
                                </div>
                                <div className="w-12 h-12 border border-gray-200 p-1 cursor-pointer hover:border-gray-400">
                                    <div className="w-full h-full bg-pink-300"></div>
                                </div>
                                <div className="w-12 h-12 border border-gray-200 p-1 cursor-pointer hover:border-gray-400">
                                    <div className="w-full h-full bg-green-500"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <button
                                disabled={!isAvailable || btnLoader}
                                onClick={addToCartHandler}
                                className={`w-full py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                                    isAvailable 
                                    ? "bg-black text-white hover:bg-gray-800" 
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                }`}
                            >
                                {btnLoader ? "Adding..." : (isAvailable ? "Add to Cart" : "Out of Stock")}
                            </button>

                            <div className="mt-8 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-8">
                                <p className="mb-4">
                                    {description || "Our Digital Concierge is available if you have any questions on this product."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal;
