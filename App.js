import React from "react";

import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tabs from "./src/components/Tabs";


const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Tabs />
    </NavigationContainer>
  )
}


export default App;