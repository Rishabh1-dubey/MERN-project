import axios from "axios";
import { MOVIE_URL, options } from "../utils/constents";
import { now_Playing_Movie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = async () => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day`, options);
  console.log(res)
    dispatch(now_Playing_Movie(res.data.results));

  } catch (error) {
    console.log(error);
  }
};

export default useNowPlaying;
