import { configureStore } from "@reduxjs/toolkit";
import inversionSlice from "../slices/inversionsSlice";
const store = configureStore({
    reducer: {
        inversionReducer: inversionSlice,
    },
  });
  
  export default store;