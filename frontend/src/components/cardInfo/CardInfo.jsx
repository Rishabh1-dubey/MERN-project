import React from "react";
import Header from "../Header";
import useMovieInfo from "../../hooks/useMovieInfo";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { IoMdTimer } from "react-icons/io";


const CardInfo = () => {
  
const{pathname} = useLocation()

  const { id } = useParams();
 
  useMovieInfo(id);
  
  const movieinfo = useSelector((store) => store.movie.movieInfo);
  const badgetColor = (rating) => {
    if (rating > 70) {
      return "bg-green-700";
    } else if (rating <= 70) {
      return "bg-yellow-700";
    } else {
      return "bg-red-300";
    }
  };

  return (
    <div className="w-[wv]">
      <Header />
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${movieinfo?.poster_path} )`,
          backgroundPosition: "top 10%",
          backgroundSize: "cover",
        }}
        className="relative w-screen h-[140vh]    px-[10%]"
      >
        <div>
          {/* //small image  -------------*/}
          <div className="pt-24 flex">
            <img
              className="h-[60vh] w-[45vh]   rounded-lg  cursor-pointer transform hover:scale-90 transition-all ease-out delay-100 "
              src={`https://image.tmdb.org/t/p/original/${movieinfo?.poster_path}`}
              alt=""
            />
            <div className=" w-full">
              {/* title */}
              <div className="font-bold text-white text-6xl px-12 ">
                <span>{movieinfo?.original_title || movieinfo?.title}</span>(
                <small className="text-xl text-gray-500">
                  {movieinfo?.release_date.split("-")[0]}
                </small>
                )
              </div>

              {/* release date */}

              <div className="pl-16  flex items-center gap-6 mb-6 mt-8">
                <div
                  className={`rounded-full bg-red-500 py-2 px-2 ${badgetColor(
                    (movieinfo?.vote_average * 10).toFixed()
                  )}`}
                >
                  <span className="text-white">
                    {(movieinfo?.vote_average * 10).toFixed()}%
                  </span>
                </div>
                <span className="font-bold text-3xl italic text-white">
                  <BsCalendar2DateFill />
                </span>
                <span className="text-white">{movieinfo?.release_date}</span>
              </div>
              {/*  */}

              {/* overvieew--- */}
              <div className=" pl-12">
                <span className="font-bold text-3xl  text-yellow-600">
                  overview :
                </span>
                <h2 className="text-white  font-bold">
                  {movieinfo?.overview?.length > 180
                    ? `${movieinfo?.overview?.slice(0, 180)}`
                    : movieinfo?.overview}
                </h2>
              </div>
              {/* ---------------- */}
              {/* langugage----------- */}
              <div className="flex items-center pl-12 gap-4 mt-2">
                <span className="">
                  <LuLanguages className="text-3xl text-yellow-400" />
                </span>
                <span className="text-white font-bold">
                  {movieinfo?.original_language.toUpperCase()}
                </span>
              </div>
              {/* ------------ */}

              {/* gneras */}
              <div className="flex items-center  mt-4 pl-12">
                <span className="text-2xl text-white font-bold ">
                  <RiMovie2Line className="text-yellow-400" />
                </span>

                {movieinfo?.genres?.map((gen) => (
                  <span className=" pl-6 text-white font-bold" key={gen?.name}>
                    {gen?.name}
                  </span>
                ))}
              </div>
              {/* runtime */}
              <div className="flex pl-12 mt-4 gap-2">
                <span className="">
                  <IoMdTimer className="text-3xl text-yellow-300 " />
                </span>
                <span className="text-white font-bold pl-2">
                  {Math.floor(movieinfo?.runtime / 60)} hr
                </span>
              </div>
              {/*  */}


            
                
                <Link to={`${pathname}/trailer`} >
                  <div className="text-white ml-12 py-2 px-2 mt-6 border border-red-300 w-28 rounded-xl">
                    Play Trailer
                  </div>
                </Link>
              )
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
