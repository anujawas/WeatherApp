import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from 'react-native'

import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
    const { container, cityName, cityText, countryName, populationStyle, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles


    const { name, country, population, sunrise, sunset } = weatherData

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/images/City-bbg.jpg')} style={imageLayout}>

                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={populationStyle}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={`Population: ${population}`} bodyTextStyles={[populationText, rowLayout]} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment.unix(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />

                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment.unix(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    populationStyle: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        marginLeft: 7.5,
        fontSize: 25,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City
