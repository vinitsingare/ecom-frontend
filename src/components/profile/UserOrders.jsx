import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserOrders } from '../../store/actions';

const UserOrders = () => {
  const dispatch = useDispatch();
  const { userOrders } = useSelector((state) => state.order);
  
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  
  const emptyOrder = !userOrders || userOrders.length === 0;
  
  return (
    <div className='pb-6 pt-20 min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-2xl font-bold mb-6'>My Orders</h1>
        
        {emptyOrder ? (
          <div className='flex flex-col items-center justify-center text-gray-600 py-10 bg-white rounded-lg shadow'>
            <FaShoppingCart size={50} className='mb-3'/>
            <h2 className='text-xl font-semibold'>No Orders Placed Yet</h2>
            <Link to="/products" className='mt-4 text-blue-600 hover:underline'>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className='bg-white rounded-lg shadow overflow-hidden'>
            {userOrders.map((order) => (
              <div key={order.orderId} className='border-b p-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='font-semibold'>Order #{order.orderId}</p>
                    <p className='text-sm text-gray-500'>
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='font-semibold'>${order.totalAmount}</p>
                    <p className='text-sm text-green-600'>{order.orderStatus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrders
