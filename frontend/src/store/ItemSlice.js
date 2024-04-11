// ItemSlice.js

import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      state.push(...action.payload);
    }
  }
});

export const itemsActions = ItemSlice.actions;
export default ItemSlice;
