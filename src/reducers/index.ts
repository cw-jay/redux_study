import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
const getCartItems = (state: RootState) => state.cart;
const getProducts = (state: RootState) => state.products;

export const getTotalPrice = (state: RootState) => {
    return getCartItems(state).reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
}

export default store; 