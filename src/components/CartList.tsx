import Product from './Product'
import { useDispatch, useSelector } from 'react-redux';

import {
  cartItems,
  checkout
} from '@/reducers/cartSlice';

import {
  resetQuantity
} from '@/reducers/productSlice';

export default function CartList(): JSX.Element {
  const cartList = useSelector(cartItems);
  const dispatch = useDispatch();
  const hasItemInCart = cartList.length > 0
  const onClickCheckout = () => {
    dispatch(checkout())
    dispatch(resetQuantity())
  }
  const getTotalPrice = () => {
    return cartList.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
}
  const nodes = hasItemInCart ? (
    cartList.map(product =>
      <Product
        title={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{getTotalPrice()}</p>
      <button onClick={onClickCheckout}
              disabled={!hasItemInCart}>
        Checkout
      </button>
    </div>
  )
}
