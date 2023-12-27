import React from "react";

import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

import { Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from "react-native";


const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'skyblue',
            },
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: 'bold'
            }
        }}
            style={{
                marginTop: StatusBar.currentHeight || 0
            }}
        >
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{
                tabBarIcon: ({ focused }) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />
            }}
            />

            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
                tabBarIcon: ({ focused }) => (<Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'} />)
            }} />
            <Tab.Screen name={'City'} component={City} options={{
                tabBarIcon: ({ focused }) => (<Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'} />)
            }} />
        </Tab.Navigator>
    )
}

export default Tabs