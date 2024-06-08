import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({baseUrl:'https://api.themoviedb.org/3/movie', params:{
    api_key:'333406bc5d503b37ad94b88c950b9af7',
    language:'es'
}})//se hace la peticion a la api 