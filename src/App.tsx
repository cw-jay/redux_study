import ProductList from '@/components/ProductList'
import CartList from '@/components/CartList'
import './App.css';

export default function App() {
  return (
    <>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductList />
      <hr />
      <CartList />
    </>
  );
}
