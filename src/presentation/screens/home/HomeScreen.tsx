import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarrousel } from '../../components/movies/PosterCarrousel'
import { HorizontalCarrousel } from '../../components/movies/HorizontalCarrousel'

const HomeScreen = () => {
  const {top} =useSafeAreaInsets()
  const {isLoading,popular,nowPlaying,topRated,upcoming,popularNextPage} = useMovies()
  if(isLoading){
    return (<Text>Cargando...</Text>)
  }
  return (
   <ScrollView>
    <View style = {{marginTop:top + 20,paddingBottom:30}}>
      {/* principal */}

      <PosterCarrousel movies = {nowPlaying}/>
      
      {/* popular */}
      <HorizontalCarrousel loadNextPage={popularNextPage} movie={popular} title='Populares'/>
      {/* topRated */}

      <HorizontalCarrousel movie={topRated} title='Mejor Calificadas'/>

      {/* upcoming */}
      <HorizontalCarrousel movie={upcoming} title='Proximamente'/>


    </View>
   </ScrollView>
  )
}
export default HomeScreen