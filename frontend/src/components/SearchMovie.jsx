import React from "react";
import { FiSearch } from "react-icons/fi";
const SearchMovie = () => {
  return (
    <div className="">
      <form class="  w-[700px] mx-auto pt-40 ">
        
       <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
        <input className="w-full outline-none rounded-md text-lg ml-2" placeholder="Search Movies......"/>
        <button className="  rounded-md" ><FiSearch className="text-3xl mr-4 text-gray-500 hover:text-black" /></button>
       </div>
      </form>
    </div>
  );
};

export default SearchMovie;
