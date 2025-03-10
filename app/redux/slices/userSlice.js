import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  role: "",
  auth: false,
  profile: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Update + Add new fields in State
      Object.assign(state, action.payload);
    },
    removeUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.role = "";
      state.auth = false;
    },
  },
});


export default userSlice;
export const {setUser, removeUser} = userSlice.actions;
