import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartActions';
import { setProducts } from "../../Redux/reducers/slice/productSlice"
import { data } from "../../mockData"

const ProductDetails = ({ productId }) => {
  const dispatch = useDispatch();
 const products = useSelector((state) => state.products.list);
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    dispatch(setProducts(data));
  }, [dispatch]);


  if (!product) return <div>Product not found</div>;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-8">
      <div className="flex">
        <img src={product.imageUrl} alt={product.name} className="w-1/3 h-auto object-cover object-center rounded-md" />
        <div className="ml-8">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-4 mb-4 text-sm">{product.description}</p>
          <p className="text-lg font-bold">{`Price: $${product.price}`}</p>
          <button onClick={() => handleAddToCart(product)}  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;












// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`/api/products/${productId}`);
//         if (!response.ok) {
//           throw new Error('Product not found');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Failed to fetch product", error);
//         setError('Failed to fetch product details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       {product ? (
//         <div>
//           <h1>{product.name}</h1>
//           <img src={product.imageSrc} alt={product.imageAlt} />
//           <p>{product.description}</p>
//           <p>Color: {product.color}</p>
//           <p>Price: ${product.price}</p>
//           {/* ...other details */}
//         </div>
//       ) : (
//         <div>Product not found.</div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
