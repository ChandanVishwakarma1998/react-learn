import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Feature/todoSlice";

export const store = configureStore({
    reducer:todoSlice.reducer
})



