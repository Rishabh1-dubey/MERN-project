import { createSlice } from "@reduxjs/toolkit";


const searchSlice =createSlice({
    name:"search",
    initialState:{
        movieName:null,
        movieDetails:null
    },
    reducers:{

        Set_Search_Movie:(state,action)=>{
            const{searchMovie , movies} = action.payload
            state.movieName = searchMovie;
            state.movieDetails = movies
        }
    }

})
export const {Set_Search_Movie} = searchSlice.actions;
export default searchSlice.reducer;

