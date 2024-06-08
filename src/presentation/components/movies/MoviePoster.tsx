import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movies } from '../../../core/entities/movie.entity'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootParams } from '../../navigation/StackNavigation'
interface Props{
    movies : Movies,
    height?:number,
    width?:number
}
export const MoviePoster = ({movies,height = 420,width=300}:Props) => {
    const navigation  = useNavigation<NavigationProp<RootParams>>()
  return (
    <Pressable onPress={()=>navigation.navigate('Details',{movieId:movies.id })}
    style = {({pressed})=>({
        opacity: pressed ? 0.8:1, 
        marginHorizontal: 10,
        paddingBottom:20,
        paddingHorizontal:10,
        width,height})}>
    <View style= {{...styles.imageContainer, width:width,height:height}}>
        <Image style= {styles.image}source={{uri: movies.poster}}/>
    </View>
    </Pressable>
  )
}

const styles =StyleSheet.create({
    image: {
        flex:1,
        borderRadius:18
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity: 0.24,
        shadowRadius:7,
        elevation:9
    }
})