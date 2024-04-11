import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state = state.filter((item) => item._id !== action.payload);
    },
  }
})

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;