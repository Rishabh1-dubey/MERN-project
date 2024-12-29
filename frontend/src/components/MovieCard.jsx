import React from "react";
import { TMDB_IMG } from "../utils/constents";

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-48 pr-2">
      <img
        className=" w-44 h-full rounded-xl  cursor-pointer transform hover:scale-90 transition-all ease-out delay-100"
        src={TMDB_IMG + poster_path}
        alt="image-demo-ttesting"
      />
    </div>
  );
};

export default MovieCard;
