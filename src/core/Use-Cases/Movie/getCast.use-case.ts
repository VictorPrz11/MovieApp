import { httpsAdapter } from "../../../config/adapters/http/http.adapter";

export const getCastUseCase = async (fethcer: httpsAdapter, movieId:number)=>{
    try {
        
    } catch (error) {
        throw new Error(`Cannot get movie cast ${movieId}`)
    }
}