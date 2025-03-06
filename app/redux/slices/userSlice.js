import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  role: "",
  auth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // const { id, email, role, name } = action.payload;
      // state.id = id;
      // state.name = name;
      // state.email = email;
      // state.role = role;

      // Update / Add only given
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
