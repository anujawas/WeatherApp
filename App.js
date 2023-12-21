import React from "react";
import CurrentWeather from "./src/components/CurrentWeather";

import { View, StyleSheet } from "react-native";
import UpcomingWeather from "./src/components/UpcomingWeather";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <StatusBar />
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;