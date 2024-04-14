import { createSlice } from "@reduxjs/toolkit";

const filterPraduct = createSlice({
  name: "filter-data",
  initialState: {
    dataAttribute: {},
  },
  reducers: {
    preductFilter: (state,action) => {
      return {
        ...state,
        dataAttribute: {
          ...state.dataAttribute,
          [action.payload.name]: action.payload.value,
        },
      };
    },
  },
});

export default filterPraduct.reducer;
export const { preductFilter } = filterPraduct.actions;
