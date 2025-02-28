import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: Date.now(),
  name: "",
  email: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddUser: (state, action) => {
      const { id, email, role, name } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.role = role;
    },
    removeUser: (state, action) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.role = "";
    },
  },
});


export default userSlice;
export const {addUser, removeUser} = userSlice.actions;
