import React from 'react'
import { Text, View } from 'react-native'

const RowText = (props) => {
    const { msg1, msg2, msg2Style, msg1Style, containerStyles } = props
    return (
        <View style={containerStyles}>
            <Text style={msg1Style}>{msg1}</Text>
            <Text style={msg2Style}>{msg2}</Text>
        </View>
    )
}
export default RowText
