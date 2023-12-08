import { Route } from 'react-router-dom';
import ProductDetails from "../ProductDetail/ProductDetail"
import { products } from "../../mockData" // Or fetch this data based on route parameters

// Inside your Routes component or main App component
<Route path="/product/:id" render={(props) => {
  const product = products.find(p => p.id === props.match.params.id);
  return <ProductDetails product={product} />;
}} />
