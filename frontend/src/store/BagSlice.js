import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "baglist",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, Qty: 1 }; // Add Qty: 1 to the payload
      state.push(newItem);
    },

    removeItem: (state, action) => {
      return state = state.filter((item) => item._id !== action.payload);
    },
    updateQty: (state, action) => {

      const itemToUpdate = state.find((item) => item._id === action.payload.id);
      console.log(action.payload.id);
      if (itemToUpdate && itemToUpdate.Qty !== action.payload.Qty) {
        console.log(action.payload.Qty);
        itemToUpdate.Qty = action.payload.Qty;
      }
      return state;
    }
  }
})

export const bagActions = BagSlice.actions;
export default BagSlice;