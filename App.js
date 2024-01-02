import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {


  const [loading, error, weather] = useGetWeather();


  if (weather && weather.list) {
    return (
      <NavigationContainer >
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer >
      {(error) ?
        <ErrorItem error={error} />
        :
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;