import React from "react";
import Header from "../Header";
import useMovieInfo from "../../hooks/useMovieInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TMDB_IMG } from "../../utils/constents";

const CardInfo = () => {
  const { id } = useParams();
  console.log(id);
  useMovieInfo(id);
  const movieinfo = useSelector((store) => store.movie.movieInfo);

  return (
    <div>
      <Header />
      <div
        // style={{
        //   background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
        //     movieinfo.backdrop_path || movieinfo.poster_path
        //   } )`,
        //   backgroundPosition: "top 10%",
        //   backgroundSize: "cover",
        // }}
        // className="relative w-screen h-[140vh]    px-[10%]"
      >
        <div>
          {/* //small image  -------------*/}
          {/* <div className="pt-24 flex">
            <img
              className="h-[55vh] w-[40vh]   rounded-lg  cursor-pointer transform hover:scale-90 transition-all ease-out delay-100 "
              src={
                movieinfo.poster_path || movieinfo.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      movieinfo.poster_path || movieinfo.backdrop_path
                    }`
                  : IMG_URL
              }
              alt=""
            />
            <h1>{movieinfo.overview}</h1>
          </div> */}
        </div>
        {/* ---------------- */}

        <div className="text-white">{movieinfo.original_title}</div>
      </div>

    
    </div>
  );
};

export default CardInfo;
