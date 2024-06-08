import { Reanimated } from "react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper";
import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import {  PopularResponse } from "../../../infrastructure/interfaces/general.db.response";
import type { Movies } from "../../entities/movie.entity";
import { PopularMapper } from "../../../infrastructure/mappers/popular.mapper";
interface Options {
    page ?: number,
    limit ?:number

}
//agnostico no depende de dependecias de terceros
export const moviesPopularUseCase = async(fetcher:httpsAdapter, options?: Options):Promise<Movies[]>=>{
try {
    const popular = await fetcher.get<PopularResponse>('/popular',{
        params:{
            page:options ?.page ?? 1
        }
    })
   return popular.results.map(result => PopularMapper.fromPopularDBResultToEntity(result))

} catch (error) {
    console.log(error)
    throw new Error('Error fetching movies-popular')
}
}
// upcoming
// top-rated
// popular