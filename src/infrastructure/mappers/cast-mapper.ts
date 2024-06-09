import { movieActors } from "../../core/entities/cast.entity";
import { CastElement } from "../interfaces/general.db.response";

export class CastMapper{
    static fromMovieDbCastToEntity(cast: CastElement): movieActors{
        return{
            id: cast.id,
            name: cast.name,
            character: cast.character ?? 'No character',
            avatar: cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`:"https://i.stack.imgur.com/l60Hf.png"
        }
    
        }
}