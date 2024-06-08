import { Reanimated } from "react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper";
import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/general.db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movies } from "../../entities/movie.entity";

//agnostico no depende de dependecias de terceros
export const moviesNowPlayUseCase = async(fetcher:httpsAdapter):Promise<Movies[]>=>{
try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')
   return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))

} catch (error) {
    console.log(error)
    throw new Error('Error fetching movies-nowPlaying')
}
}
// upcoming
// top-rated
// popular