import axios from "axios";
import { MOVIE_URL, options } from "../utils/constents";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { now_Popular_Movie } from "../redux/movieSlice";

const usePopularMovie = async ()=>{

const dispatch = useDispatch()


  const res = await axios.get(`${MOVIE_URL}/popular`, options);

  dispatch(now_Popular_Movie(res.data.results))
};  


export default usePopularMovie;
