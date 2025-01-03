import axios from "axios";
import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { FiSearch } from "react-icons/fi";
import { options } from "../utils/constents";
import { useDispatch, useSelector } from "react-redux";
import { Set_Search_Movie } from "../redux/searchSlice";
const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  // const {movieName,movieDetails} = useSelector((state) => state.search);
  const { movieName, movieDetails } = useSelector((state) => state.search);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res);

      const movies = res?.data?.results;
      dispatch(Set_Search_Movie({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    }
    setSearchMovie("")
  };

  return (
    <>
      <div className="flex justify-center  w-screen ">
        <div className=" w-full ">
          <img className="bg-gradient-to-b from-black" src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" />
          <form
            onSubmit={onSubmit}
            className=" absolute top-3 w-[700px]  pt-40 mx-auto right-[370px] "
          >
            <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%] gap-2">
              <input
                value={searchMovie}
                onChange={(e) => {
                  setSearchMovie(e.target.value);
                }}
                className="w-full outline-none rounded-md text-lg ml-4 pl-4 "
                placeholder="Search Movies......"
              />
              <button className="  rounded-md">
                <FiSearch className="text-3xl mr-4 text-gray-500 hover:text-red-700" />
              </button>
            </div>
          </form>
        </div>
      <div className="absolute top-[40%] w-[80%] ">
        <MovieList title={movieName} movies={movieDetails} />
      </div>
      </div>
    </>
  );
};

export default SearchMovie;
