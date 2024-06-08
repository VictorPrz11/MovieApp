import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Movies } from '../../../core/entities/movie.entity'
import { ScrollView } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'
interface Props{
     movies: Movies[],
     height? :number
}
export const PosterCarrousel = ({height=440,movies}:Props) => {
  return (
   <View style = {{height:height}}> 
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            movies.map(movies=> <MoviePoster key={movies.id} movies={movies}/>)
        }
    </ScrollView>
   </View>
  )
}
