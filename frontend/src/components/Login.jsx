import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
function Login() {
  const [logIN, setLogin] = useState(false);


  const handleclick=()=>{
    setLogin(!logIN);
  }
  return (
    
    <div >
      <Header />
      <div className="">
        <img
          className="h-screen w-screen bg-cover bg-center bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="netflix-bg"
          />
      </div>
      <form className="absolute top-[20%] right-0 left-0 w-[390px] h-auto mx-auto m-12 p-6 bg-black rounded-xl opacity-90  ">
        <h1 className="text-white text-center pt-6 text-3xl font-bold tracking-wide">
         { logIN?"SignIn":"SignUp"}
        </h1>
        <div className="z-10 text-white  flex flex-col p-6 w-full  ">
    
    {!logIN &&<span className="pb-1">Name</span>}
          {
            
            !logIN && <input
            className="rounded-md p-2 border-none "
            type="text"
            placeholder="Username "
            />
            
          }
            
          <label className="mt-1">Email</label>
          <input
            className="rounded-md p-2 border-none mt-3 "
            type="text"
            placeholder="Enter you Email"
            />

          <label className="py-2">Password</label>
          <input
            className="rounded-md p-2"
            type="password"
            placeholder="*********"
            />
          <button className="mt-6 px-2 py-2 font-semibold bg-red-800 cursor-pointer hover:bg-red-700">
         { logIN?"Signin":"Signup"  }
          </button>
          <p onClick={handleclick} className="tracking-wide mt-3 cursor-pointer">
            {logIN ? "you dont't have an account?" : "already have an account?" } <span className="text-blue-500 underline">{logIN?"signup":"signin"}</span>
          </p>
        </div>
      </form>
    </div>
          
  );
}

export default Login;
