import  { useEffect, useState } from 'react'
import { movieDbFetcher } from '../../config/adapters/moviedb.adapter'
import { FullMovie } from '../../core/entities/movie.entity';
import * as UsesCases from '../../core/Use-Cases'
import { movieActors } from '../../core/entities/cast.entity';
export const useMoviesH = (movieId: number ) => {
  const [isLoading, setisLoading] = useState(true)
  const [movie,setMovie] = useState<FullMovie>()
  const [cast,setCast] = useState<movieActors[]>()

useEffect(() => {
    LoadMovie()
}, [movieId])




const LoadMovie = async ()=>{
   setisLoading(true)

   const fullMoviePromise = await UsesCases.getByIdUseCase(movieDbFetcher,movieId,)
   const castPromise = await UsesCases.getCastUseCase(movieDbFetcher,movieId,)
   const [FullMovie, cast] = await Promise.all([fullMoviePromise,castPromise]) //hace las funciones en simulateno haciendo promise All
   setMovie(FullMovie)
   setCast(cast)
   setisLoading(false)
   console.log(cast)
}




    return {
         isLoading,
         movie,cast
    }
}
