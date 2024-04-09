import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';
const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: data,
        filteredItems: []
    },
    reducers: {
        filterData(state, action) {
            if (action.payload) {
                state.filteredItems = [...state.items.filter(item => item.type === action.payload)];
            }
            else {
                state.filteredItems = [...state.items];
            }
        }
    }
});

export const menuActions = menuSlice.actions;
export default menuSlice;
