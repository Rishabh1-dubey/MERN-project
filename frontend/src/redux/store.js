import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import movieSlice from "./movieSlice"
import searchSlice from "./searchSlice"


const  store =  configureStore({
  reducer: {
    app: UserSlice,
    movie:movieSlice,
    search:searchSlice
    
  },
});
export default store;