// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminPanel = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '' });

//   useEffect(() => {
//     // Fetch all products from your API
//     axios.get('/api/products')
//       .then(response => {
//         setProducts(response.data);
//       });
//   }, []);

//   const addProduct = () => {
//     // Call your API to add the new product
//     axios.post('/api/products', newProduct)
//       .then(response => {
//         // Update the products list
//         setProducts([...products, response.data]);
//       });
//   };

//   const removeProduct = (id) => {
//     // Call your API to remove the product
//     axios.delete(`/api/products/${id}`)
//       .then(() => {
//         // Update the products list
//         setProducts(products.filter(product => product.id !== id));
//       });
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>

//       {/* Form to Add New Product */}
//       <div>
//         <input 
//           type="text" 
//           placeholder="Product Name" 
//           value={newProduct.name} 
//           onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
//         />
//         <input 
//           type="number" 
//           placeholder="Price" 
//           value={newProduct.price}
//           onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
//         />
//         <button onClick={addProduct}>Add Product</button>
//       </div>

//       {/* Table to Display Products */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => removeProduct(product.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPanel;






// src/components/AdminPanel.js
import React from 'react';
import { useSelector } from 'react-redux';

const AdminPanel = () => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role !== 'admin') {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      {/* Your admin functionalities here */}
    </div>
  );
};

export default AdminPanel;
