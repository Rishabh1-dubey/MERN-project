import React from "react";
import {useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { useLocation, useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";


const Playtrailer = () => {
  const id = useParams();
  console.log(id)
  useMovieTrailer(id)
  const movieTrailer = useSelector((state) => state.movie.playTrailer); 
  console.log(movieTrailer);
  
  return <div>

{/* <ReactPlayer
     controls
        height={600}
        width={900}
        url={`https://www.youtube.com/watch?v=${id.key}`}
      /> */}
      <div className="w-screen    ">
      <iframe
        className=" w-screen  aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=K4wdSvc5f30JL6TJ&autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
    </div>
  </div>;
};

export default Playtrailer;
