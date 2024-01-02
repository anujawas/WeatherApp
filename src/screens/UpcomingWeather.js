import React from 'react'

import { StatusBar, FlatList, SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native'

import ListItems from '../components/ListItems'


const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item }) => (
        <ListItems condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )

    const { container, img } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/images/upcoming-bg.jpg')}
                style={img}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}

                />
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    img: {
        flex: 1
    }
})

export default UpcomingWeather 
