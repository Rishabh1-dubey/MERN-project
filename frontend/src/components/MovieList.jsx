import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8  ">
      <h1 className="text-3xl font-bold text-white px-12">{title}</h1>
      <div className="mt-4 ml-12  ">
        <div className="flex overflow-x-auto no-scrollbar">

        <div className="flex items-center ">
          {movies?.map((movie) => (
           <Link to={"/cardinfo/"+ movie?.id}>
            <MovieCard
            key={movie.id}
            movieId={movie.id}
            poster_path={movie.poster_path || movie.backdrop_path}
            />
            </Link>
            
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
