import React from "react";


import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";

import { View, StyleSheet } from "react-native";
import City from "./src/screens/City";

import {
  NavigationContainer
} from "@react-navigation/native";


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
        {/* <UpcomingWeather /> */}
        {/* <City /> */}
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;