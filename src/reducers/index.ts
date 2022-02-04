import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export const getCartItems = (state: RootState) => state.cart;
export const getProducts = (state: RootState) => state.products;

export const getTotalPrice = () => {
    return getCartItems(store.getState()).reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
}

export default store; 