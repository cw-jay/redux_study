import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { CartItem } from '../../interface'
import getItemIndex from '../../common';

const initialState: CartItem[] = [
];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            if (itemIndex && itemIndex < 0) {
                state.push(action.payload);
            }
            else {
                state[itemIndex].quantity += 1;
            }
        },
        checkout() {
            alert('구매가 완료되었습니다')
            return initialState
        }
    },
});

export const {
  addToCart,
  checkout
} = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
