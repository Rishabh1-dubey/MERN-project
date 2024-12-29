import axios from 'axios'
import { MOVIE_URL, options } from '../utils/constents'
import { useDispatch } from 'react-redux'
import { now_Upcoming_Movie } from '../redux/movieSlice'


const useUpcomingMovie = async() => {
    const dispatch = useDispatch()
    const res = await axios.get(`${MOVIE_URL}/upcoming`, options)

    dispatch(now_Upcoming_Movie(res.data.results))
 
}

export default useUpcomingMovie