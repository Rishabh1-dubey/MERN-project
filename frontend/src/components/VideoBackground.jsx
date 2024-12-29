import React from "react";

const VideoBackground = () => {
  return (
    <div className="w-[100%] ">
      <iframe
        className=" w-screen h-[80%]  aspect-video"
        src="https://www.youtube.com/embed/XO8wew38VM8?si=K4wdSvc5f30JL6TJ&autoplay=1&mute=1"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
