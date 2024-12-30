import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store?.movie?.NowPlayingMovie);
  if (!movie) return; // early return ---
 
  const { id, overview, title } = movie[3];
  return (
    <div>
      <div className="bg-black">
        <VideoTitle title={title} overview={overview} />
        <VideoBackground MovieId={id} />
      </div>
      <div></div>
    </div>
  );
};

export default MainContainer;
