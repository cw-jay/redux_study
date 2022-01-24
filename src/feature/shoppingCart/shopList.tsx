import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  cartItems,
  checkout
} from './cartSlice';

import {
  products,
  decrementQuantity,
  resetQuantity
} from './productSlice';

import Cart from '../../components/Cart'
import ProductItem from '../../components/ProductItem'
import ProductsList from '../../components/ProductsList'
import { CartItem } from '../../interface';

export default function ShoppingList() {
  const cartList = useSelector(cartItems);
  const productList = useSelector(products);
  const dispatch = useDispatch();
  const onClickAddToCart = (product: CartItem) => {
    const addedItem: CartItem = {
      ...product,
      quantity: 1
    }
    dispatch(addToCart(addedItem))
    dispatch(decrementQuantity(product))
  }

  const onClickCheckout = () => {
    dispatch(checkout())
    dispatch(resetQuantity())
  }

  const getTotalPrice = () => {
      return cartList.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
  }

  return (
    <>
      <ProductsList title="Products">
        {productList.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => onClickAddToCart(product)} />
        )}
      </ProductsList>
      <hr />
      <Cart
          products={cartList}
          total={getTotalPrice()}
          onCheckoutClicked={onClickCheckout} />
    </>
  );
}
