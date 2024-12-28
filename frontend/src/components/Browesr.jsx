import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browesr = () => {

const user = useSelector((store)=>store.app.user)

  const navigate = useNavigate()
  useEffect(()=>{
if(!user){
  navigate("/")
}
  },[])



  return (
    <div>
      <Header />
      <div>browser</div>
    </div>
  );
};

export default Browesr;
