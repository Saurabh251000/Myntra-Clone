import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    islogin: false,
    name: "",
    email: "",
    mobile: "",
  },
  reducers: {
    LoginState: (state) => {
      return {
        ...state,
        islogin: !state.islogin,
      };
    },
    Updateinfo: (state, action) => {
      // Destructure payload properties for clarity and potential validation
      const { name, email, mobile } = action.payload;
      // Update state values as instructed
      return {
        ...state,
        name,
        email,
        mobile,
      };
    },
  }
})

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;