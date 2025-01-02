import axios from 'axios'
import React, { useEffect } from 'react'
import {  options } from '../utils/constents'
import { useDispatch } from 'react-redux'
import { Set_Movie__card_Trailer, Set_Movie_Info } from '../redux/movieSlice'

const useMovieInfo = (id) => {

const dispatch= useDispatch()

 const Movieinfo= async()=>
   {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,options )
    console.log(res.data)
    dispatch(Set_Movie_Info(res.data))
    

 }


 useEffect(()=>{
    Movieinfo()
 },[])

}


export default useMovieInfo