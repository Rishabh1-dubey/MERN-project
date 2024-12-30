import React, { useEffect } from "react";
import usePlayTrailer from "../hooks/usePlayTrailer";
import { useSelector } from "react-redux";
import UseTrailerMain from "../hooks/usePlayTrailer";

const VideoBackground = ({MovieId}) => {
const trailer = useSelector(store=>store.movie.movieTrailer)
 UseTrailerMain(MovieId)
 

  return (
    <div className="w-screen    ">
      <iframe
        className=" w-screen  aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=K4wdSvc5f30JL6TJ&autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
