import  { useEffect, useState } from 'react'
import { movieDbFetcher } from '../../config/adapters/moviedb.adapter'
import { FullMovie } from '../../core/entities/movie.entity';
import * as UsesCases from '../../core/Use-Cases'
export const useMoviesH = (movieId: number ) => {
  const [isLoading, setisLoading] = useState(true)
  const [movie,setMovie] = useState<FullMovie>()

useEffect(() => {
    LoadMovie()
}, [movieId])




const LoadMovie = async ()=>{
   setisLoading(true)

   const FullMovie = await UsesCases.getByIdUseCase(movieDbFetcher,movieId,)
   setMovie(FullMovie)
   setisLoading(false)
}




    return {
         isLoading,
         movie
    }
}
