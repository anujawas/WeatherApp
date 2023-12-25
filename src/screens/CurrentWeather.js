import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
    const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles

    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>

                <RowText containerStyles={highLowWrapper} msg1Style={highLow} msg2Style={highLow} msg1={"High: 8 "} msg2={"Low: 6"} />
            </View>
            <RowText containerStyles={bodyWrapper} msg1Style={description} msg2Style={message} msg1={"It's Sunny"} msg2={"It's perfect T-Shirt Weather"} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
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
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        margin: 40
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30,
    }
});

export default CurrentWeather;