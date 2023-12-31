// src/api.js
import { myApiKey } from "./config.js"

const baseUrl = "https://api.weatherapi.com/v1";

async function getWeather(location) {
    try {
        const response = await fetch(`${baseUrl}/current.json?key=${myApiKey}&q=${location}`, { mode: "cors" });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching weather data:", error);
    }
}

export { getWeather };
