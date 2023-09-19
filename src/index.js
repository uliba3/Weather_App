// dist/index.js
import { getWeather } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const weatherForm = document.getElementById("weather-form");
    const weatherLocationInput = document.getElementById("weather-location");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const weatherName = document.getElementById("weather-name");
    const weatherTime = document.getElementById("weather-time");
    const weatherIcon = document.getElementById("weather-icon");
    const temperatureDegree = document.getElementById("temperatureDegree");
    const windDirection = document.getElementById("windDirection");
    const windDegree = document.getElementById("windDegree");

    const isCelsius = true; 

    weatherForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const location = weatherLocationInput.value;

        try {
            const weatherData = await getWeather(location);
            console.log(weatherData); // You can process the data here

            const weather = {
                country: weatherData.location.country,
                city: weatherData.location.region,
                state: weatherData.current.condition.text,
                lastUpdated: weatherData.current.last_updated,
                iconUrl: weatherData.current.condition.icon,
                humidity: weatherData.current.humidity,
                temperatureC: weatherData.current.temp_c,
                temperatureF: weatherData.current.temp_f,
                windDirection: weatherData.current.wind_dir,
                windKph: weatherData.current.wind_kph,
                windMph: weatherData.current.wind_mph,
            }

            // Update the DOM with the weather data
            weatherIcon.src = weather.iconUrl;
            country.innerText = weather.country;
            city.innerText = weather.city;
            weatherName.innerText = weather.state;
            weatherTime.innerText = weather.lastUpdated;
            temperatureDegree.innerText = weather.temperatureC;
            windDirection.innerText = weather.windDirection;
            windDegree.innerText = weather.windKph;
            
        } catch (error) {
            console.error(error);
        }
    });
});

