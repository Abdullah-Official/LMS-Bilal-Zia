import { configureStore } from "@reduxjs/toolkit";
import classReducer from "../reducers/classReducer";
import enrollclassesReducer from "../reducers/enrollclassesReducer";
import userReducer from "../reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    classes: classReducer,
    enrolledClasses: enrollclassesReducer,
  },
});