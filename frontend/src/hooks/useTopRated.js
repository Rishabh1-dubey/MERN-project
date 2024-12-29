import React from "react";
import { useDispatch } from "react-redux";
import { MOVIE_URL, options } from "../utils/constents";
import { now_Top_Rated_Movie } from "../redux/movieSlice";
import axios from "axios";

const useTopRatedMovie = async () => {
  const dispatch = useDispatch();

  const res = await axios.get(`${MOVIE_URL}/top_rated`, options);
  dispatch(now_Top_Rated_Movie(res.data.results));
};

export default useTopRatedMovie;
