import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';
const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: data
    },
    reducers: {
        fetchData(state, action) {
            state.items = [...action.payload]
        }
    }
});

export const menuActions = menuSlice.actions;
export default menuSlice;
