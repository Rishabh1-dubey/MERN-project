import axios from "axios";
import { options } from "../utils/constents";
import { useDispatch } from "react-redux";
import { Set_Movie__card_Trailer, Set_Trailer } from "../redux/movieSlice";
import { useEffect } from "react";


const UseTrailerMain=(movieId, flag)=>{

  const dispatch = useDispatch();

  const usePlayTrailer = async () => {
    
    
    
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
      
      
      const trailer = res?.data?.results?.filter((item) => {
        return  item.type === "Trailer";
      });
      dispatch(Set_Trailer(trailer.length  > 0 ? trailer[0] : trailer[1]));
    dispatch(Set_Movie__card_Trailer(trailer));
      console.log(trailer)
      
     
    }

    useEffect(()=>{
      usePlayTrailer()
    },[])
    };

export default UseTrailerMain;
