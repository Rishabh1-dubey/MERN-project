
import { createSlice } from "@reduxjs/toolkit";
const movieSlice =createSlice({
    name:"movie",
    initialState:{
        NowPlayingMovie:null
    },
    reducers:{
        //action

        now_Playing_Movie:(state,action)=>{
            state.NowPlayingMovie= action.payload
        }
    }
})
export const{now_Playing_Movie}= movieSlice.actions
export default movieSlice.reducer;