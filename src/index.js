// dist/index.js
import { getWeather } from "./api.js";

// Function to create and apply an arrow with a specified angle
function createArrow(angleDegrees) {
    const arrowContainer = document.getElementById("windDirection");

    // Remove all child elements of arrowContainer
    while (arrowContainer.firstChild) {
        arrowContainer.removeChild(arrowContainer.firstChild);
    }

    // Calculate the length and angle for the arrow
    const length = 50; // Change this to adjust arrow length
    const angleRadians = (angleDegrees * Math.PI) / 180;

    // Create a unique class name for the arrow
    const className = `arrow-${angleDegrees}`;

    // Create a dynamic CSS rule for the arrow
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
        `.${className}::after {
            content: '';
            border: 15px solid transparent;
            border-top: 15px solid black;
            display: inline-block;
            margin-right: 5px;
            transform: rotate(${angleDegrees}deg);
        }`,
        styleSheet.cssRules.length
    );

    // Create a div with the arrow class and add it to the container
    const arrowElement = document.createElement("div");
    arrowElement.className = className;
    arrowContainer.appendChild(arrowElement);
}
  

document.addEventListener("DOMContentLoaded", () => {
    const windDirections = {
        "N": { direction: "North", angle: 0 },
        "NNE": { direction: "North-Northeast", angle: 22.5 },
        "NE": { direction: "Northeast", angle: 45 },
        "ENE": { direction: "East-Northeast", angle: 67.5 },
        "E": { direction: "East", angle: 90 },
        "ESE": { direction: "East-Southeast", angle: 112.5 },
        "SE": { direction: "Southeast", angle: 135 },
        "SSE": { direction: "South-Southeast", angle: 157.5 },
        "S": { direction: "South", angle: 180 },
        "SSW": { direction: "South-Southwest", angle: 202.5 },
        "SW": { direction: "Southwest", angle: 225 },
        "WSW": { direction: "West-Southwest", angle: 247.5 },
        "W": { direction: "West", angle: 270 },
        "WNW": { direction: "West-Northwest", angle: 292.5 },
        "NW": { direction: "Northwest", angle: 315 },
        "NNW": { direction: "North-Northwest", angle: 337.5 }
    };
      
    
    const weatherForm = document.getElementById("weather-form");
    const weatherLocationInput = document.getElementById("weather-location");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const weatherName = document.getElementById("weather-name");
    const weatherTime = document.getElementById("weather-time");
    const weatherIcon = document.getElementById("weather-icon");
    const temperatureDegree = document.getElementById("temperatureDegree");
    const celsiusButton = document.getElementById("celsius");
    const fahrenheitButton = document.getElementById("fahrenheit");
    const windDirection = document.getElementById("windDirection");
    const windDegree = document.getElementById("windDegree");
    const kphButton = document.getElementById("kph");
    const mphButton = document.getElementById("mph");

    let weather = {};

    weatherForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const location = weatherLocationInput.value;

        try {
            const weatherData = await getWeather(location);
            console.log(weatherData); // You can process the data here

            weather = {
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
            createArrow(windDirections[weather.windDirection].angle);
            windDegree.innerText = weather.windKph;
            
        } catch (error) {
            console.error(error);
        }
    });
    // Add event listeners to toggle
    celsiusButton.addEventListener("click", () => {
        temperatureDegree.innerText = weather.temperatureC;
    });
    fahrenheitButton.addEventListener("click", () => {
        temperatureDegree.innerText = weather.temperatureF;
    });
    kphButton.addEventListener("click", () => {
        windDegree.innerText = weather.windKph;
    });
    mphButton.addEventListener("click", () => {
        windDegree.innerText = weather.windMph;
    });
});

