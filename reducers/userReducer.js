import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: '',
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      AsyncStorage.removeItem("token");
    },
    userInfo: (state, action) => {
    //   state.token = action.payload.token;
    //   state.name = action.payload.name;
    //   state.userId = action.payload._id;
    state.user = action.payload
    },
    userToken: (state,action) => {
      AsyncStorage.setItem('token', action.payload)
        state.token = action.payload
    }
  },
});

export const { userInfo, logout, userToken } = userReducer.actions;

export default userReducer.reducer;
