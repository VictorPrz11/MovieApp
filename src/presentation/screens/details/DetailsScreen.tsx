import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { RootParams } from '../../navigation/StackNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { useMoviesH } from '../../hooks/useMoviesH'
import { Movieheader } from '../../components/movie/movieHeader'
import { MovieDetails } from '../../components/movie/movieDetails'
import { ScrollView } from 'react-native-gesture-handler'
interface Props extends StackScreenProps<RootParams,'Details'>{

}
const DetailsScreen = ({route}:Props) => {
  // const params = useRoute<RouteProp<RootParams,"Details" >>().params //se toman los parametros que se dan por defecto a dicha pantalla en este caso Details 
const {movieId} = route.params
const {isLoading,movie,cast = []} = useMoviesH(movieId)
if(isLoading){
  return 
}
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>

      {/* Header */}
      <Movieheader title={movie!.title} subtitle={movie!.originalTitle} poster={movie!.poster}/>
      
       {/* Detalles */}

     <MovieDetails movie={movie!} cast = {cast} />
    </ScrollView>
  )
}
export default DetailsScreen 