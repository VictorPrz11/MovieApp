import { THE_MOVIE_API_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({baseUrl:'https://api.themoviedb.org/3/movie', params:{
    api_key: THE_MOVIE_API_KEY ?? 'NO KEY',
    language:'es'
}})//se hace la peticion a la api 