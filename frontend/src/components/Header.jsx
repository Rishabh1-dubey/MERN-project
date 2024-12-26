import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <div className="  absolute   flex justify-between items-center bg-gradient-to-b from-black  w-[100%] p-8 px-12 ">
    

      <img
        className=" pl-12 h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
        />

      <div className="flex items-center ">
        
        <h1 className="text-lg font-medium text-white flex gap-1"><IoIosArrowDropdown size="26px " />Rishabh fav</h1>
        <div className=" ml-4">
          <button className="bg-red-800 text-white px-4 py-2   ">Logout</button>

          <button className="bg-red-800 text-white px-4 py-2 ml-2 ">
            SearchMovie
          </button>
        
      </div>
        </div>
    </div>
  );
};

export default Header;
