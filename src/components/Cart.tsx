import Product from './Product'
import { CartItem } from '@/interface'

interface CartItemType {
  products: CartItem[]
  total: number
  onCheckoutClicked: () => void
}

export default function Cart(props: CartItemType) {
  const { products, total, onCheckoutClicked } = props
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
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
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
              disabled={!hasProducts}>
        Checkout
      </button>
    </div>
  )
}
