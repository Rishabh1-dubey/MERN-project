import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    NowPlayingMovie: null,
    NowPopularMovie: null,
    NowUpcominngMovie: null,
    NowTopRatedMovie: null,
    toggle:false,
    movieTrailer:null
  },
  reducers: {
    //action
    now_Playing_Movie: (state, action) => {
      state.NowPlayingMovie = action.payload;
    },
    now_Popular_Movie: (state, action) => {
      state.NowPopularMovie = action.payload;
    },
    now_Upcoming_Movie: (state, action) => {
      state.NowUpcominngMovie = action.payload;
    },
    now_Top_Rated_Movie: (state, action) => {
      state.NowTopRatedMovie = action.payload;
    },
    Set_toggle:(state)=>{
      state.toggle= !state.toggle;
    },
    Set_Trailer:(state,action)=>{
      state.movieTrailer = action.payload
    }
  },
});
export const {
  now_Playing_Movie,
  now_Popular_Movie,
  now_Upcoming_Movie,
  now_Top_Rated_Movie,
  Set_toggle,
  Set_Trailer
} = movieSlice.actions;
export default movieSlice.reducer;
