import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    NowPlayingMovie: null,
    NowPopularMovie: null,
    NowUpcominngMovie: null,
    NowTopRatedMovie: null,
    toggle: false,
    movieTrailer: null,
    movieInfo: null,
    playTrailer:null,
    cast:null
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
    Set_toggle: (state) => {
      state.toggle = !state.toggle;
    },
    Set_Trailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    Set_Movie_Info: (state, action) => {
      state.movieInfo = action.payload;
    },
    Set_Movie__card_Trailer:(state,action)=>{
      state.playTrailer= action.payload;
    },
    Set_Cast: (state,action)=>{
      state.cast = action.payload
    }
    
  },
});
export const {
  now_Playing_Movie,
  now_Popular_Movie,
  now_Upcoming_Movie,
  now_Top_Rated_Movie,
  Set_toggle,
  Set_Trailer,
  Set_Movie_Info,
  Set_Movie__card_Trailer,
  Set_Cast
} = movieSlice.actions;
export default movieSlice.reducer;
