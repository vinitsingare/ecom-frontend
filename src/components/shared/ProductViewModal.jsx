import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import { useState } from 'react'
import Status from './Status';
import { MdClose, MdDone } from 'react-icons/md';

function ProductViewModal({open, setOpen, product, isAvailable}) {
  
  const {id, productName, image, description, quantity, price, discount, specialPrice} = product;
  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Dialog open={open} as="div" className="relative z-10" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl dark-card shadow-2xl transition-all md:max-w-[620px] md:min-w-[620px] w-full gradient-border"
            >
                {image && (
                    <div className='flex justify-center aspect-3/2 bg-dark-light/30'>
                    <img 
                    src={image}
                    alt={productName}
                    className="object-contain" />
                    </div>
                )}



                <div className='px-8 pt-8 pb-4'>
                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-white mb-4">
                {productName}
              </DialogTitle>


              <div className="space-y-3 text-gray-400 pb-4">
                <div className="flex items-center justify-between gap-2">
                  {specialPrice ? (
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 line-through text-lg">
                        ${Number(price).toFixed(2)}
                      </span>
                      <span className="sm:text-2xl font-bold gradient-text">
                        ${Number(specialPrice).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold gradient-text">
                      ${Number(price).toFixed(2)}
                    </span>
                  )}

                  {isAvailable ? (
                    <Status
                      text="In Stock"
                      icon={MdDone}
                      bg="bg-teal-500/20"
                      color="text-teal-400"
                    />
                  ) : (
                    <Status
                      text="Out-Of-Stock"
                      icon={MdClose}
                      bg="bg-rose-500/20"
                      color="text-rose-400"
                    />
                  )}
                </div>

                <Divider className="border-dark-light" />

                <p className="leading-relaxed">{description}</p>
              </div>
                </div>


            <div className="px-8 py-6 flex justify-end gap-4 bg-dark-card/50">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="px-6 py-2.5 text-sm font-semibold text-gray-300 border border-dark-light hover:border-purple-500 hover:text-white rounded-full transition-all duration-300"
              >
                Close
              </button>
            </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal;
