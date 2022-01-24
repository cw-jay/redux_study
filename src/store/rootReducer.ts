import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../feature/shoppingCart/cartSlice';
import productsReducer from '../feature/shoppingCart/productSlice';

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
});

export default rootReducer;