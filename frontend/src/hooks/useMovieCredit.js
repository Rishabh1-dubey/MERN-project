import axios from "axios";
import React, { useEffect } from "react";
import { options } from "../utils/constents";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Set_Cast } from "../redux/movieSlice";

const useMovieCredit = (id) => {
  const dispath = useDispatch();
  const CastandCrew = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );

    dispath(Set_Cast(res.data.cast.slice(0,15)));
  };
  useEffect(() => {
    CastandCrew();
  }, []);
};

export default useMovieCredit;
