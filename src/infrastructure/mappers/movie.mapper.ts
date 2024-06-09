import { FullMovie, Movies } from '../../core/entities/movie.entity';
import { Cast, MovieDbMovie, Result as MovieResultDb } from "../interfaces/general.db.response";

export class MovieMapper {
    static fromMovieDBResultToEntity(result: MovieResultDb): Movies {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            realeaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backDrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }
    static fromMovieDbToEntity(movie: MovieDbMovie): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            realeaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backDrop: movie.backdrop_path,
            genres: movie.genres.map(genre=>genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanie: movie.production_companies.map(companies => companies.name)

        }
    }

  
}