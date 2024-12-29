import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 ">
      <h1 className="text-3xl text-white">{title}</h1>
      <div className="mt-4 ml-12  ">
        <div className="flex overflow-x-auto no-scrollbar">

        <div className="flex items-center ">
          {movies?.map((movie) => (
            <MovieCard
            key={movie.id}
            poster_path={movie.poster_path || movie.backdrop_path}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
