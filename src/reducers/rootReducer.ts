import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '@/reducers/cartSlice';
import productsReducer from '@/reducers/productSlice';

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
});

export default rootReducer;