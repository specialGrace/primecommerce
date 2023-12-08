import React from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import { removeFromCart,updateQuantity } from "../../Redux/Actions/CartActions"
import { CheckIcon, ClockIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Cart = () => {
     const cartItems = useSelector(state => state.cart.items);
   const total = useSelector(state => state.cart.total);
   const dispatch = useDispatch();

  const subtotal = useSelector(state => state.cart.subtotal);


   const handleRemove = (item) => {
     dispatch(removeFromCart(item));
   };

   const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value, 10);
     dispatch(updateQuantity(productId, newQuantity));
   };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cartItems.map((item, index) => (
                <li key={index} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <Link href={item.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {item.name}
                           </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                          {item.size ? <p className="mt-1 text-sm text-gray-500">{item.size}</p> : null}
                        </div>

                        <p className="text-sm font-medium text-gray-900 text-right">{`$${item.price}`}</p>
                      </div>

                      <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                        <label htmlFor={`quantity-${index}`} className="sr-only">
                        <span>{item.name} (Quantity: {item.quantity})</span>

                        </label>
                        <select
                          id={`quantity-${index}`}
                          name={`quantity-${index}`}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(e, item.id)}
                          className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                         {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>{num}</option>
  ))}
                        </select>

                        <button
                         onClick={() => handleRemove(item)}
                          type="button"
                          className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      {item.inStock ? (
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                      )}

                      <span>{item.inStock ? 'In stock' : `Ships in ${item.leadTime}`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">{`$${subtotal}`}</dd>
                  </div>

                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">{`$${total}`}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
             <Link to="/checkout">Proceed to Checkout</Link>
              </button>
            </div>

            <div className="mt-6 text-sm text-center text-gray-500">
              <p>
                or
                <Link to="/products" className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
               </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Cart;
