import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movies } from '../../../core/entities/movie.entity'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'

interface Props {
    movie: Movies[]
    title?: string,
    loadNextPage?: () => void
}
export const HorizontalCarrousel = ({ movie, title, loadNextPage }: Props) => {
    const isLoading = useRef(false) //useRef no dispara rerenders cuando cambia su valor...

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);

    }, [movie])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width
        if (!isEndReached) return
        //Cargamos las siguientes peliculas
        isLoading.current = true
        loadNextPage && loadNextPage()


    }

    return (
        <View
            style={{
                height: title ? 260 : 220
            }}
        >
            {
                title && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontStyle: 'italic',
                            marginBottom: 10
                        }}>{title}</Text>
                )
            }
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={movie} renderItem={({ item }) => (<MoviePoster movies={item} width={140} height={200} />)} keyExtractor={(item) => item.id.toString()}
                onScroll={onScroll} />
        </View>
    )
}