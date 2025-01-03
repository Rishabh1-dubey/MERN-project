import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieCredit from "../hooks/useMovieCredit";
import { TMDB_IMG } from "../utils/constents";

const CastandCrew = () => {
  const { id } = useParams();
  console.log(id);
  useMovieCredit(id);

  const movieCast = useSelector((state) => state.movie.cast);
  
  return (
    <div className="w-screen bg-black ">
      <h1 className="text-white text-4xl">Cast and Crew</h1>

      <div className="flex flex-wrap gap-3 overflow-x-hidden ">
        {movieCast?.map((castmoive) => (
          <div className="  w-44 h-full rounded-xl  cursor-pointer transform hover:scale-90 transition-all ease-out delay -100 px-4 py-4 ">
            <img
              className="rounded-lg h-56"
              src={`${TMDB_IMG}/${castmoive?.profile_path}`}
              alt="cast-image"
            />
            <h1 className="text-white">
              {castmoive?.name || castmoive?.original_name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastandCrew;
