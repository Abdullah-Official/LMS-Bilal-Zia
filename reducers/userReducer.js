import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import localStorage from 'react-native-sync-localstorage'

const initialState = {
  user: {},
  token: '',
};


const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:  (state, action) => {
      state.token = null;
    },
    userInfo: (state, action) => {
    state.user = action.payload
    },
    addToken:  (state,action) => {
    //  await AsyncStorage.setItem('token', action.payload)
        state.token = action.payload
    },
    removeUserDataFromAsyncStorage: (state, action) => {
      state.user = {};
      state.token = '';
    },
  },
});

export const { userInfo, logout, addToken, removeUserDataFromAsyncStorage} = userReducer.actions;

export default userReducer.reducer;
