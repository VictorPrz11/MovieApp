import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { movieActors } from '../../../core/entities/cast.entity'
interface Props{
    actor : movieActors
}
export const ActorDetails = ({actor}:Props) => {
  return (
   <View style = {styles.container}>
    <Image source={{uri: actor.avatar,}} style = {{width: 100,height:150, borderRadius:10}}/>

    <View style = {styles.actorInfo}>
        <Text ellipsizeMode='tail' numberOfLines={1}  style = {{fontWeight: 'bold', fontSize: 15 }}>{actor.name}</Text>
        <Text style = {{opacity: 0.7, fontSize: 12}}>{actor.name}</Text>
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginRight: 10, 
        paddingLeft: 10, 
        display: 'flex', 
        flexDirection:'column',
        width: 100,
        marginTop: 10,
        },
        actorInfo: {
        marginLeft: 10,
        marginTop: 4,
        
        }
})