import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDbMovie } from "../../../infrastructure/interfaces/general.db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";


export const getByIdUseCase = async (fetcher: httpsAdapter, movieId:number):Promise<FullMovie>=>{

    try {
        const movie = await fetcher.get<MovieDbMovie>(`${movieId}`)
       const fullMovie = MovieMapper.fromMovieDbToEntity(movie);

       return fullMovie;
    } catch (error) {
        throw new Error (`Cannot get movie by id ${movieId}`)
    }

}