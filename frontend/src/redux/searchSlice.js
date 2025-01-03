import { createSlice } from "@reduxjs/toolkit";


const searchSlice =createSlice({
    name:"search",
    initialState:{
        searchMovie:null,
        movieDetails:null
    },
    reducers:{

        Set_Search_Movie:(state,action)=>{
            const{searchMovie , movies} = action.payload
            state.searchMovie = searchMovie;
            state.movieDetails = movies
        }
    }

})
export const {Set_Search_Movie} = searchSlice.actions;
export default searchSlice.reducer;

