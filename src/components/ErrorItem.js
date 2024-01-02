import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = ({ error }) => {
    const { container, errorMsg } = styles;
    return (
        <View style={container}>
            <Text style={errorMsg}>
                Sorry Something Went Wrong!!

                {error}
            </Text>
            <Feather name='frown' size={100} color={'white'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'

    },
    errorMsg: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    },


})

export default ErrorItem