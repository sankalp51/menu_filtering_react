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
            switch (action.payload) {
                case "all":
                    state.filteredItems = state.items;
                    break;
                case "breakfast":
                    state.filteredItems = state.items.filter(item => item.type === action.payload);
                    break;
                case "lunch":
                    state.filteredItems = state.items.filter(item => item.type === action.payload);
                    break;
                case "drink":
                    state.filteredItems = state.items.filter(item => item.type === action.payload);
                    break;
                default:
                    state.filteredItems = state.items
            }
        }
    }
});

export const menuActions = menuSlice.actions;
export default menuSlice;
