import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieContainer from "./movieContainer";
import axios from "axios";
import { BACKEND_URL, MOVIE_URL, options } from "../utils/constents";
import MainContainer from "./MainContainer";
import { now_Playing_Movie } from "../redux/movieSlice";

const Browesr =  () => {
  const user = useSelector((store) => store.app.user);
const dispatch=useDispatch()
  const navigate = useNavigate();

  const nowPlayingMovies= async()=>{

    const res = await axios.get(`${MOVIE_URL}/now_playing`, options);
    console.log(res.data.results);
    dispatch(now_Playing_Movie(res.data.results))
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    nowPlayingMovies()
  }, []);

  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  );
};

export default Browesr;
