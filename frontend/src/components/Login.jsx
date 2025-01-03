import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BACKEND_URL } from "../utils/constents";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";
import { FaSadCry } from "react-icons/fa";

function Login() {
  const [logIN, setLogin] = useState(false);
  const [name, SetName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //subscribe the store
  const isLoading = useSelector((store) => store.app.isLoading);

  const handleclick = () => {
    setLogin(!logIN);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (logIN) {
      //login
      try {
        const user = { email, password };
        const res = await axios.post(`${BACKEND_URL}/signin`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
      
        if (res.data.success) {
          toast.success(res.data.message);
        }

        dispatch(setUser(res.data.user));
      const token = res.data.token;
      localStorage.setItem("token",token)
        navigate("/browser");
      } catch (error) {
        toast.error(error.response.data.message);
      
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //signup
      const user = { name, email, password };
   
      try {
        const res = await axios.post(`${BACKEND_URL}/signup`, user, {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        });
       
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
     setLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setLoading(false))
      }
    }
   

    useEffect(()=>{
      const token =  localStorage.getItem("token");
      if(token){
        navigate("/browser")
      }else{
        navigate("/")
      }
    },[])
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="h-screen w-screen bg-cover bg-center bg-no-repeat "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form
        onSubmit={submitForm}
        className="absolute top-[10%] right-0 left-0 w-[390px] h-auto mx-auto m-12 p-6 bg-black rounded-xl opacity-90  "
      >
        <h1 className="text-white text-center pt-6 text-3xl font-bold tracking-wide">
          {logIN ? "SignIn" : "SignUp"}
        </h1>
        <div className="z-10 text-white  flex flex-col p-6 w-full  ">
          {!logIN && <span className="pb-1">Name</span>}
          {!logIN && (
            <input
              onChange={(e) => {
                SetName(e.target.value);
              }}
              value={name}
              className="rounded-md p-2 border-none text-black "
              type="text"
              placeholder="Username "
            />
          )}

          <label className="mt-1">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded-md p-2 border-none mt-3 text-black "
            type="text"
            placeholder="Enter you Email"
          />

          <label className="py-2">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-md p-2 text-black"
            type="password"
            placeholder="*********"
          />

          <button className="mt-6 px-2 py-2 font-semibold bg-red-800 cursor-pointer hover:bg-red-700">
            {`${isLoading ? "loading...." : logIN ? "Login" : "Signup"}`}
          </button>
          <p
            onClick={handleclick}
            className="tracking-wide mt-6 cursor-pointer"
          >
            {logIN ? "you dont't have an account?" : "already have an account?"}{" "}
            <span className="text-blue-500 underline">
              {logIN ? "signup" : "signin"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
