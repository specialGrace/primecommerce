import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { data } from "../../mockData"
import { setProducts } from "../../Redux/reducers/slice/productSlice"
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/CartActions';


 const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);


    useEffect(() => {
      dispatch(setProducts(data));
    }, [dispatch]);

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-white">
       <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 border rounded"
      />
       <button onClick={() => setSearchTerm('')} className="p-2 ml-2 bg-blue-500 text-white rounded">
        Clear
       </button>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4">
               <Link to='/product/:productId' className="text-lg font-medium block">
               {product.name}
               </Link>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">

                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>


                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">Price: ${product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                {/* <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a> */}
                <button onClick={() => handleAddToCart(product)}  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
              Add to Cart
            </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductList





