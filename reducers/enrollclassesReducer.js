import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetch3, fetch2 } from "../app/helpers/fetch";

const initialState = [];

export const fetchEnrollClasses = createAsyncThunk("fetchenrollclasses", async (body) => {
  const result = await fetch3(`https://physics-by-bilal-zia-29lh6uim8-abdullah-official.vercel.app/getenrollclasses/${body.id}`, "get");
  return result;
});

const enrollclassesReducer = createSlice({
  name: "enrollclasses",
  initialState,
  reducers: {},
  extraReducers: {
        [fetchEnrollClasses.fulfilled]: (state, action) => {
      return action.payload.message;
    },
  },
});

export default enrollclassesReducer.reducer;
