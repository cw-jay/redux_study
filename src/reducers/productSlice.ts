import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/interface'
import getItemIndex from '@/common';

const initialState: CartItem[] = [];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitilStateFromAPI(state: CartItem[], action: PayloadAction<any>) {
            state.push({
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
            })
        },
        decrementQuantity(state: CartItem[], action: PayloadAction<CartItem>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            if (itemIndex >= 0 && state[itemIndex].quantity > 0) {
                state[itemIndex].quantity -= 1
            }
        },
        resetQuantity() {
            setInitilStateFromAPI([])
        },
    }
});

export const {
    decrementQuantity,
    resetQuantity,
    setInitilStateFromAPI
} = productSlice.actions;

export default productSlice.reducer;
