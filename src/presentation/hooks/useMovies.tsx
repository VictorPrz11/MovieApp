import React, { useEffect, useState } from 'react'
import { Movies } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/Use-Cases'
import { movieDbFetcher } from '../../config/adapters/moviedb.adapter';


let popularPageNumber = 1;

export const useMovies = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movies[]>([])
    const [popular, setPopular] = useState<Movies[]>([])
    const [topRated, setTopRated] = useState<Movies[]>([])
    const [upcoming, setUpcoming] = useState<Movies[]>([])
    useEffect(() => {
        initialLoad()
    }, [])
    const initialLoad = async()=>{
        const nowPlayingPromise =  UseCases.moviesNowPlayUseCase(movieDbFetcher)
        const upcomingPromise =  UseCases.moviesUpcomingUseCase(movieDbFetcher)
        const topRatedPromise =  UseCases.moviesTopRatedUseCase(movieDbFetcher)
        const popularPromise =  UseCases.moviesPopularUseCase(movieDbFetcher)
       const [nowPlayingMovies,
        upcomingMovies,
        topRatedMovies,
        popularMovies] = await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise])

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setIsLoading(false)
    }
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    //methods
    popularNextPage : async ()=>{
      popularPageNumber ++ 
      const popularMovies = await UseCases.moviesPopularUseCase(movieDbFetcher,{page: popularPageNumber})
      console.log(popularMovies)
    console.log(popularPageNumber)
      setPopular( prev => ([...prev.concat(popularMovies)]) )
    }
    
  }
}
