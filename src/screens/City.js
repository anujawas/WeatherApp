import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from 'react-native'

import IconText from '../components/IconText'

const City = () => {
    const { container, cityName, cityText, countryName, population, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/images/City-bbg.jpg')} style={imageLayout}>

                <Text style={[cityName, cityText]}>Barnala</Text>
                <Text style={[countryName, cityText]}>India</Text>
                <View style={population}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={100000} bodyTextStyles={[populationText, rowLayout]} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'07:30:50 AM'} bodyTextStyles={riseSetText} />

                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'16:50:45 PM'} bodyTextStyles={riseSetText} />
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
    population: {
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
