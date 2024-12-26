import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="">
      <Header />
      <div className="">
        <img
          className="h-screen w-screen bg-cover bg-center bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form className="absolute top-1/4 right-0 left-0 w-[370px] h-[430px] mx-auto m-12 bg-black rounded-xl  opacity-95 ">
      <h1 className="text-white text-center pt-4 text-3xl font-bold tracking-wide">Signup</h1>
        <div className="z-10 text-white  flex flex-col p-6 w-full   ">
          <label className="pb-2">Name</label>
          <input
            className="rounded-md p-2 border-none "
            type="text"
            placeholder="Enter you name"
          />

          <label className="py-2">Email</label>
          <input
            className="rounded-md p-2"
            type="email"
            placeholder="Enter you Email"
          />

          <label className="py-2">Password</label>
          <input
            className="rounded-md p-2"
            type="password"
            placeholder="*********"
          />
          <button className="mt-4  px-2 py-2 font-semibold bg-red-800 cursor-pointer hover:bg-red-700">
            Signup
          </button>
          <p className="tracking-normal mt-3 ">
            Already have an account?{" "}
            <Link className="underline text-blue-500" to="/">
              signin
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
