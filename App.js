import React from "react";
import {
  View, Text, SafeAreaView, StyleSheet, StatusBar
} from "react-native";

const MyFirstComponent = () => {

}

const App = () => {
  return (<SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <Text style={styles.highLow}>High: 8 Low: 6</Text>
    </View>
    <StatusBar />
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
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
  }
})


export default App;