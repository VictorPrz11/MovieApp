import { httpsAdapter } from "../../../config/adapters/http/http.adapter";
import { Cast, CastElement } from "../../../infrastructure/interfaces/general.db.response";
import { CastMapper } from "../../../infrastructure/mappers/cast-mapper";
import { movieActors } from "../../entities/cast.entity";

export const getCastUseCase = async (fetcHer: httpsAdapter, movieId:number): Promise <movieActors[]>=>{
    try {
        const {cast} = await fetcHer.get<Cast>(`/${movieId}/credits`)
        const actors  =  cast.map(CastMapper.fromMovieDbCastToEntity)
        return actors
    } catch (error) {
        throw new Error(`Cannot get movie cast ${movieId}`)
    }
}