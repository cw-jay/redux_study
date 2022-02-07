import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '@/reducers'
import { checkout } from '@/reducers/cartSlice';
import { resetQuantity } from '@/reducers/productSlice';
import Product from './Product'

export default function CartList(): JSX.Element {
  const cartList = useSelector(getCartItems);
  const dispatch = useDispatch();
  const hasItemInCart = cartList.length > 0
  const onClickCheckout = () => {
    dispatch(checkout())
    dispatch(resetQuantity())
  }

  const nodes = hasItemInCart ? (
    cartList.map(product =>
      <Product
        title={product.title}
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
