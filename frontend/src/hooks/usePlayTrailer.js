import axios from "axios";
import { options } from "../utils/constents";
import { useDispatch } from "react-redux";
import { Set_Movie__card_Trailer, Set_Trailer } from "../redux/movieSlice";
import { useEffect } from "react";


const UseTrailerMain=(movieId)=>{

  const dispatch = useDispatch();

  const usePlayTrailer = async () => {
  
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
      
      
      const Filtertrailer = res?.data?.results?.filter((item) =>item.type === "Trailer");
      const trailer = Filtertrailer.length > 0 ? Filtertrailer[0] : Filtertrailer[1]
      dispatch(Set_Trailer(trailer));
      dispatch(Set_Movie__card_Trailer(trailer));
      
      
     
    }

    useEffect(()=>{
      usePlayTrailer()
    },[])
    };

export default UseTrailerMain;
