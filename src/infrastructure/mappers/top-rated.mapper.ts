import { Movies } from "../../core/entities/movie.entity";
import { Result} from "../interfaces/general.db.response";

export class TopRatedMapper{
    static fromTopRatedDBResultToEntity(result : Result) : Movies{
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            realeaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backDrop:  `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }
}