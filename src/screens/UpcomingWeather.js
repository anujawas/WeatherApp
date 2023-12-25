import React from 'react'

import { StatusBar, FlatList, SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native'

import ListItems from '../components/ListItems'

const DATA = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_text: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_text: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItems condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
    )

    const { container, img } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/images/upcoming-bg.jpg')}
                style={img}
            >
                <Text>UpcomingWeather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_text}

                />
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    img: {
        flex: 1
    }
})

export default UpcomingWeather 
