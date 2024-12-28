import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import movieSlice from "./movieSlice"

const  store =  configureStore({
  reducer: {
    app: UserSlice,
    movie:movieSlice
  },
});
export default store;