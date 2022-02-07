import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '@/interface';
import { getProducts } from '@/reducers'
import { addToCart } from '@/reducers/cartSlice';
import { decrementQuantity, setInitilStateFromAPI } from '@/reducers/productSlice';
import { fetchProductList } from '@/api/apiService';
import ProductItem from '@/components/ProductItem'
import { useEffect } from 'react';

export default function ProductList(): JSX.Element {
  const productList = useSelector(getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
      fetchProductList()
      .then(res => res.json())
      .then(data => {
        dispatch(setInitilStateFromAPI(data))
      })
  }, [dispatch])
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
      {productList.length > 0 && productList.map((product) =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => onClickAddToCart(product)} />
        )}
    </div>
  )
} 
