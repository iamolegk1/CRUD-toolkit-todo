import { configureStore } from "@reduxjs/toolkit";
import todo from "../Slice/todoSlice";

const store = configureStore({
  reducer: { todo },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
