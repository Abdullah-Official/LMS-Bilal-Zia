import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetch3, fetch2 } from "../app/helpers/fetch";

const initialState = [];

export const fetchClasses = createAsyncThunk("fetchclasses", async () => {
  const result = await fetch3(`https://physics-by-bilal-zia-29lh6uim8-abdullah-official.vercel.app/getclasses`, "get");
  return result;
});


const classesReducer = createSlice({
  name: "classes",
  initialState,
  reducers: {},
  extraReducers: {
        [fetchClasses.fulfilled]: (state, action) => {
      return action.payload.message;
    },
  },
});

export default classesReducer.reducer;
