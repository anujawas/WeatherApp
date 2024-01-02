import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from 'react-native-dotenv'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const fetchWeatherData = async () => {

        if (lat && lon) {
            try {
                const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                // console.log(res);
                const data = await res.json();
                console.log(data);
                setWeather(data)
            }
            catch (e) {
                console.log(e);
                setError('Could Not fetch Weather')
            }
            finally {
                setLoading(false)
            }
        }

    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to Access Location Denied!!');

                return
            }
            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeatherData();
        })()
    }, [lat, lon])

    return [loading, error, weather]
}