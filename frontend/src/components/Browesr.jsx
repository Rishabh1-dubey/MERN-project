import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcoming";
import useTopRatedMovie from "../hooks/useTopRated";
import SearchMovie from "./SearchMovie";
import MovieContainer from "./MovieContainer";

const Browesr = () => {
  const toggle = useSelector(store => store.movie.toggle);
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();

  useNowPlaying();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? 
          <SearchMovie />
         : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browesr;
