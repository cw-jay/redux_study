import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/interface'
import { RootState } from '@/store';
import getItemIndex from '@/common';

const initialState: CartItem[] = [
    {
        "id": "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
        "name": "Air Jordan 1 Mid",
        "category": "Men's Shoes",
        "price": 115,
        "quantity": 2
    },
    {
        "id": "d52fd362-1080-46b3-a43c-d64f7a6825ab",
        "name": "Nike Air Zoom-Type",
        "category": "Men's Shoes",
        "price": 150,
        "quantity": 3
    }
];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        decrementQuantity(state: CartItem[], action: PayloadAction<CartItem>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            if (itemIndex >= 0 && state[itemIndex].quantity > 0) {
                state[itemIndex].quantity -= 1
            }
        },
        resetQuantity() {
            return initialState
        },
    }
});

export const {
    decrementQuantity,
    resetQuantity
} = productSlice.actions;

export const products = (state: RootState) => state.products;

export default productSlice.reducer;
