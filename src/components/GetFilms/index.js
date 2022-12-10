import axios from "axios"
import Apikey from '../../assets/Apikey'


export const GetFilms = async (movieId = '' , count = 1, what='movie') => {
    const getFilms = await axios(` https://api.themoviedb.org/3/${what}/${movieId}?api_key=${Apikey}&language=en-US&page=${count}`)
    const {data : results} = await getFilms
    return results
}
// https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US