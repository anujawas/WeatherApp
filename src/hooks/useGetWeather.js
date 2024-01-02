import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import axios from "axios";
const apiUrl = 'http://localhost:3000/weather'; // Replace with your 
const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin (you may want to restrict this in a production environment)
    },
});

export const useGetWeather = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const fetchWeatherData = async () => {

        if (lat && lon) {
            try {
                const res = await fetch(`http://192.168.6.50:3000/weather?lat=${lat}&lon=${lon}`)
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