import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import DetailsScreen from '../screens/details/DetailsScreen';

export type RootParams = {
    Home:undefined,
    Details: {movieId:number}
}
const Stack = createStackNavigator<RootParams>();
export const StackNavigation = () => {
    
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  )
}
