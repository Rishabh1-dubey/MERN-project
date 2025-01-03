import axios from "axios";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { options } from "../utils/constents";
import { useDispatch } from "react-redux";
import { Set_Search_Movie } from "../redux/searchSlice";
const SearchMovie = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");

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

    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} class="  w-[700px] mx-auto pt-40 ">
        <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
          <input
            value={searchMovie}
            onChange={(e) => {
              setSearchMovie(e.target.value);
            }}
            className="w-full outline-none rounded-md text-lg ml-2"
            placeholder="Search Movies......"
          />
          <button className="  rounded-md">
            <FiSearch className="text-3xl mr-4 text-gray-500 hover:text-black" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;
