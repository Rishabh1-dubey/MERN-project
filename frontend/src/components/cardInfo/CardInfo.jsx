import React from "react";
import Header from "../Header";
import useMovieInfo from "../../hooks/useMovieInfo";
import usePlayTrailer from "../../hooks/usePlayTrailer";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { IoMdTimer } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import CastandCrew from "../CastandCrew";


const CardInfo = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useMovieInfo(id);
  const movieinfo = useSelector((store) => store.movie.movieInfo);
  
  usePlayTrailer(id);
  const trailer = useSelector((store) => store.movie.playTrailer);
  
  
  const badgetColor = (rating) => {
    if (rating > 70) {
      return "bg-green-700";
    } else if (rating <= 70) {
      return "bg-yellow-700";
    } else {
      return "";
    }
  };
  
  return (
    <div className="w-full">


      <Header />

        {/* nav bar part -1 */}
      <nav className="absolute z-10 h-[10vh] w-[400px] flex gap-8 items-center text-2xl text-zinc-200   mt-20 ml-24">
        <FaArrowLeft
          className="text-pink-600 hover:text-yellow-500 cursor-pointer"
          onClick={() => navigate(-1)}
        ></FaArrowLeft>

        <a
          target="_blank"
          className="hover:text-yellow-500 cursor-pointer"
          href={movieinfo?.homepage}
          >
          <FaEarthAmericas />
        </a>
      </nav>
    <div>
      <div className="pt-28 bg-black">
        <div className="w-[1000px] mx-auto ">

        <iframe
          className="w-full aspect-video pb-6"
          height="500"
          width="1000"
          src={`https://www.youtube.com/embed/${trailer?.key}?si=BFBYOBci8Cdy9ZHN&autoplay=1`}
          
          ></iframe>
          </div>
          </div>
      </div>


      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)) ,url(https://image.tmdb.org/t/p/original/${
            movieinfo?.poster_path || movieinfo?.backdrop_path
          } )`,
          backgroundPosition: "top 10%",
          backgroundSize: "cover",
        }}
        className="relative w-screen h-[140vh]    px-[10%]"
        >
        <div className="">
          {/* //small image  -------------*/}
          <div className="pt-36 flex">
            <img
              className="h-[60vh] w-[45vh]   rounded-lg  cursor-pointer transform hover:scale-90 transition-all ease-out delay-100 "
              src={`https://image.tmdb.org/t/p/original/${
                movieinfo?.poster_path || movieinfo?.backdrop_path
              }`}
              alt=""
              />
            <div className=" w-full">
              {/* title */}
              <div className="font-bold text-white text-6xl px-12 ">
                <span>{movieinfo?.original_title || movieinfo?.title}</span>(
                <small className="text-xl text-gray-500">
                  {movieinfo?.release_date?.split("-")[0]}
                </small>
                )
              </div>
              {/* release date */}
              <div className="pl-16  flex items-center gap-6 mb-6 mt-8">
                <div
                  className={`rounded-full  py-2 px-2 ${badgetColor(
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
              {/* -----tagline---------- */}
              <div className="flex items-center pl-12 gap-4 mt-2">
                <span className="italic font-bold text-blue-500">
                  Tag line:
                </span>
                <span className=" font-bold italic text-white">
                  {movieinfo?.tagline}
                </span>
              </div>
              {/*  --------------------- */}
              {/* langugage----------- */}
              <div className="flex items-center pl-12 gap-4 mt-2">
                <span className="">
                  <LuLanguages className="text-3xl text-yellow-400" />
                </span>
                <span className="text-white font-bold">
                  {movieinfo?.original_language?.toUpperCase()}
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
            </div>
          </div>
      </div>
    </div>
      <CastandCrew/>
              </div>
  );
};

export default CardInfo;
