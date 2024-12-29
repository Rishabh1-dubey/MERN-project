import React from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = () => {
  return (
    <div className="w-screens absolute aspect-video pt-[16%] text-white ml-24">
      <h1 className="text-3xl font-bold  ">hello Rishabh Mern</h1>
      <p className="text-xl pt-4 pb-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iure vel provident hic soluta.
      </p>
      <div className="flex gap-6 ">
        <button className="flex  gap-2 rounded-xl bg-red-600 py-2 px-8 text-center delay-100 hover:cursor-pointer hover:text-black hover:bg-white text-white text-xl font-bold ">
          {" "}
          <IoMdPlayCircle className="mt-1 text-2xl" />
          Play{" "}
        </button>
        <button className="flex  gap-2 rounded-xl bg-black py-2 px-6 text-center delay-100 hover:cursor-pointer hover:text-black hover:bg-white  text-white text-xl font-bold ">
          {" "}
          More Info <FaInfoCircle className="text-2xl mt-1" />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
