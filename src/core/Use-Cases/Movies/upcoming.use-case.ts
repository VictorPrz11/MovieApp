
import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import { UpcomingResponse } from "../../../infrastructure/interfaces/general.db.response";
import { UpcomingMapper } from "../../../infrastructure/mappers/upcoming.mapper";
import type { Movies } from "../../entities/movie.entity";

//agnostico no depende de dependecias de terceros
export const moviesUpcomingUseCase = async(fetcher:httpsAdapter):Promise<Movies[]>=>{
try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming')
   return upcoming.results.map(result => UpcomingMapper.fromUpcomingDBResultToEntity(result))

} catch (error) {
    console.log(error)
    throw new Error('Error fetching movies-upcoming')
}
}
// upcoming
// top-rated
// popular