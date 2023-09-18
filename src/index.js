// index.js
import { getWeather } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const weatherForm = document.getElementById("weather-form");

    weatherForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        
        const weatherLocationInput = document.getElementById("weather-location");
        const weatherIcon = document.getElementById("weather-icon");
        const weatherName = document.getElementById("weather-name");
        

        const location = weatherLocationInput.value;
        console.log(location);

        try {
            const weatherData = await getWeather(location);
            console.log(weatherData); // You can process the data here

            // Extract the relevant data from the response
            const weatherIconUrl = weatherData.current.condition.icon;
            const weatherText = weatherData.current.condition.text;

            // Update the DOM with the weather data
            weatherIcon.src = weatherIconUrl;
            weatherName.textContent = weatherText;
        } catch (error) {
            console.error(error);
        }
    });
});

