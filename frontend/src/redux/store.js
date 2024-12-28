import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";

const  store =  configureStore({
  reducer: {
    app: UserSlice,
  },
});
export default store;