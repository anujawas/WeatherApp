import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
    const { wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles


    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

    const weatherCondition = weather[0]?.main
    return (
        <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.bgColor }]}>
            <View style={container}>
                <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
                <Text style={tempStyle}>{temp}°</Text>
                <Text style={feels}>Feels like {feels_like}°</Text>

                <RowText
                    containerStyles={highLowWrapper} msg1Style={highLow}
                    msg2Style={highLow} msg1={`High: ${temp_max}° `}
                    msg2={`Low: ${temp_min}°`}
                />
            </View>
            <RowText
                containerStyles={bodyWrapper}
                msg1Style={description}
                msg2Style={message}
                msg1={weather[0]?.description}
                msg2={weatherType[weatherCondition]?.msg}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tempStyle: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 25,
        margin: 40
    },
    description: {
        fontSize: 43
    },
    message: {
        fontSize: 25,
    }
});

export default CurrentWeather;