import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-[280px] relative ">
       

        <MovieList title={" Now PlayingMovie"} movies={movie.NowPlayingMovie} />
        <MovieList title={"PopularMovie"} movies={movie.NowPopularMovie} />
        
        <MovieList
          title={"UpcominngMovie"}
          movies={movie.NowUpcominngMovie}
        />
        <MovieList title={"TopRatedMovie"} movies={movie.NowTopRatedMovie} />
      </div>
    </div>
  );
};

export default MovieContainer;
