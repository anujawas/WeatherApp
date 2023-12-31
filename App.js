import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import * as Location from 'expo-location';



const App = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to Access Location Denied!!');

        return
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })()
  }, [])

  if (location) {
    console.log(location);
  }
  return (
    <NavigationContainer >
      {(loading) ?
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
        :
        <Tabs />}
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