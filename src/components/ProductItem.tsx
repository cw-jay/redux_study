import { CartItem } from '@/interface'
import Product from './Product'

interface productItemType {
  product: CartItem,
  onAddToCartClicked: () => void
}

export default function ProductItem ({ product, onAddToCartClicked }: productItemType) {
  return (
    <div style={{ marginBottom: 20 }}>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity} />
      <button
        onClick={onAddToCartClicked}
        disabled={product.quantity === 0}
      >
        {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  )
}

