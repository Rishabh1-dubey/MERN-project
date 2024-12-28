import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../utils/constents";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Header = () => {
  const user = useSelector((store) => store.app.user);
  console.log(user);


const navigate= useNavigate()

const Logout=async()=>{
  try {
    const res= await axios.get(`${BACKEND_URL}/logout`)
    console.log(res)
    if(res.data.success){
      toast.success(res.data.message)
    } 
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="  absolute   flex justify-between items-center bg-gradient-to-b from-black  w-[100%] p-8 px-12 ">
      <img
        className=" pl-12 h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center ">
          <h1 className="text-xl font-bold text-white flex gap-1">
            <IoIosArrowDropdown size="26px " />
         {   `Welcome Back ${user.name} 🧒🏻`}
          </h1>
          <div className=" ml-4">
            <button onClick={Logout} className="bg-red-800 text-white px-4 py-2   ">
              Logout
            </button>

            <button className="bg-red-800 text-white px-4 py-2 ml-2 ">
              SearchMovie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
