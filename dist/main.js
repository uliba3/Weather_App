(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e={N:{direction:"North",angle:0},NNE:{direction:"North-Northeast",angle:22.5},NE:{direction:"Northeast",angle:45},ENE:{direction:"East-Northeast",angle:67.5},E:{direction:"East",angle:90},ESE:{direction:"East-Southeast",angle:112.5},SE:{direction:"Southeast",angle:135},SSE:{direction:"South-Southeast",angle:157.5},S:{direction:"South",angle:180},SSW:{direction:"South-Southwest",angle:202.5},SW:{direction:"Southwest",angle:225},WSW:{direction:"West-Southwest",angle:247.5},W:{direction:"West",angle:270},WNW:{direction:"West-Northwest",angle:292.5},NW:{direction:"Northwest",angle:315},NNW:{direction:"North-Northwest",angle:337.5}},t=document.getElementById("weather-form"),n=document.getElementById("weather-location"),r=document.getElementById("country"),i=document.getElementById("city"),o=document.getElementById("weather-name"),c=document.getElementById("weather-time"),d=document.getElementById("weather-icon"),a=document.getElementById("temperatureDegree"),u=document.getElementById("celsius"),s=document.getElementById("fahrenheit"),l=document.getElementById("windDirection"),m=document.getElementById("windDegree"),h=document.getElementById("kph"),g=document.getElementById("mph");let E={};t.addEventListener("submit",(async t=>{t.preventDefault();const u=n.value;try{const t=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=d497700796c940518d932911230608&q=${e}`,{mode:"cors"});if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(e){throw new Error("Error fetching weather data:",e)}}(u);console.log(t),E={country:t.location.country,city:t.location.region,state:t.current.condition.text,lastUpdated:t.current.last_updated,iconUrl:t.current.condition.icon,humidity:t.current.humidity,temperatureC:t.current.temp_c,temperatureF:t.current.temp_f,windDirection:t.current.wind_dir,windKph:t.current.wind_kph,windMph:t.current.wind_mph},d.src=E.iconUrl,r.innerText=E.country,i.innerText=E.city,o.innerText=E.state,c.innerText=E.lastUpdated,a.innerText=E.temperatureC,l.innerText=e[E.windDirection].direction,m.innerText=E.windKph}catch(e){console.error(e)}})),u.addEventListener("click",(()=>{a.innerText=E.temperatureC})),s.addEventListener("click",(()=>{a.innerText=E.temperatureF})),h.addEventListener("click",(()=>{m.innerText=E.windKph})),g.addEventListener("click",(()=>{m.innerText=E.windMph}))}))})();