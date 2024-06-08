import { Reanimated } from "react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper";
import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/general.db.response";
import type { Movies } from "../../entities/movie.entity";
import { TopRatedMapper } from "../../../infrastructure/mappers/top-rated.mapper";

//agnostico no depende de dependecias de terceros
export const moviesTopRatedUseCase = async(fetcher:httpsAdapter):Promise<Movies[]>=>{
try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated')
   return topRated.results.map(result => TopRatedMapper.fromTopRatedDBResultToEntity(result))

} catch (error) {
    console.log(error)
    throw new Error('Error fetching movies-topRated')
}
}
// upcoming
// top-rated
// popular