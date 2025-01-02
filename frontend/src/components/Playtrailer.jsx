// import React, { useDebugValue } from "react";
// import { useSelector } from "react-redux";
// import ReactPlayer from "react-player/youtube";
// import { useLocation, useParams } from "react-router-dom";
// // import useMovieTrailer from "../hooks/useMovieTrailer";
// import UseTrailerMain from "../hooks/usePlayTrailer";

// const Playtrailer = () => {
//   const { id } = useParams();
//   console.log(id);
  
  
//   const trailer = useSelector((state) => state.movie.playTrailer);
//   console.log(trailer);

//   return (
//     <div className="absolute bg-black bg-opacity-80 z-[100] h-screen w-screen top-0 left-0 flex items-center justify-center ">
      
//       {trailer ? (
//   <ReactPlayer
//     controls
//     height={600}
//     width={900}
//     url={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
//   />
// ) : (
//   <span>dsjdfkljdsklfjdsklfj</span>
// )}
//     </div>
//   );
// };

// export default Playtrailer;
