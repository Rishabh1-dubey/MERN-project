import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useMovieCredit from '../hooks/useMovieCredit'
import { TMDB_IMG } from '../utils/constents'

const CastandCrew = () => {
    const {id} = useParams();
    console.log(id)
    useMovieCredit(id)

    const movieCast = useSelector((state)=>state.movie.cast)
    console.log(movieCast)
  return (
    <div className='w-[700px]'>
         {/* <img
        className=" w-44 h-full rounded-xl  cursor-pointer transform hover:scale-90 transition-all ease-out delay-100"
        src={`https://image.tmdb.org/t/p/original/${movieCast?.profile_path}`}
        alt="image-demo-ttesting"
      /> */}
      <h1 className='text-white'>{movieCast?.original_name}</h1>
    </div>
  )
}

export default CastandCrew