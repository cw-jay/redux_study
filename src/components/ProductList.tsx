import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '@/interface';

import {
  addToCart
} from '@/reducers/cartSlice';

import {
  products,
  decrementQuantity
} from '@/reducers/productSlice';

import ProductItem from '@/components/ProductItem'

export default function ProductList(): JSX.Element {
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
  return (
    <div>
      <h3>Products</h3>
      {productList.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => onClickAddToCart(product)} />
        )}
    </div>
  )
} 
