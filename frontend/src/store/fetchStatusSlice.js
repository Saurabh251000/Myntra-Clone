import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
    orderclicked: 0,
  },
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      return state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      return state.currentlyFetching = false;
    },
    markOrderclicked: (state) => {
      console.log("request aaya");
      return {
        ...state,
        orderclicked: state.orderclicked + 1
      };
    }

  }
})

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;