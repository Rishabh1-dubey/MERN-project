import React, { useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
// const [video, setVideo] = useState(null);




// let randomData =
// data.results[(Math.random() * data.results.length).toFixed()];

  const movie = useSelector((store) => store?.movie?.NowPlayingMovie);
  if (!movie) return; // early return ---
 
 
  const { id, overview, title } = movie[4];
  // movie[(Math.random() * movie.length).toFixed()];
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
