import React from "react";
import {useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { useLocation, useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";


const Playtrailer = () => {
  const{id} = useParams();
  useMovieTrailer(id)
  const movieTrailer = useSelector((state) => state.movie.playTrailer);
  
 console.log(movieTrailer)
  
  return <div>

<ReactPlayer
     controls
        height={600}
        width={900}
        url={`https://www.youtube.com/watch?v=${movieTrailer.key}`}
      />
  </div>;
};

export default Playtrailer;
