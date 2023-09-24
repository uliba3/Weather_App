(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e={N:{direction:"North",angle:0},NNE:{direction:"North-Northeast",angle:22.5},NE:{direction:"Northeast",angle:45},ENE:{direction:"East-Northeast",angle:67.5},E:{direction:"East",angle:90},ESE:{direction:"East-Southeast",angle:112.5},SE:{direction:"Southeast",angle:135},SSE:{direction:"South-Southeast",angle:157.5},S:{direction:"South",angle:180},SSW:{direction:"South-Southwest",angle:202.5},SW:{direction:"Southwest",angle:225},WSW:{direction:"West-Southwest",angle:247.5},W:{direction:"West",angle:270},WNW:{direction:"West-Northwest",angle:292.5},NW:{direction:"Northwest",angle:315},NNW:{direction:"North-Northwest",angle:337.5}},t=document.getElementById("weather-form"),n=document.getElementById("weather-location"),r=document.getElementById("country"),o=document.getElementById("city"),a=document.getElementById("weather-name"),c=document.getElementById("weather-time"),i=document.getElementById("weather-icon"),d=document.getElementById("temperatureDegree"),s=document.getElementById("celsius"),l=document.getElementById("fahrenheit"),m=document.getElementById("windDegree"),u=document.getElementById("kph"),h=document.getElementById("mph");let g={};t.addEventListener("submit",(async t=>{t.preventDefault();const w=n.value;try{const t=await async function(e){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=d497700796c940518d932911230608&q=${e}`,{mode:"cors"});if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(e){throw new Error("Error fetching weather data:",e)}}(w);console.log(t),g={country:t.location.country,city:t.location.region,state:t.current.condition.text,lastUpdated:t.current.last_updated,iconUrl:t.current.condition.icon,humidity:t.current.humidity,temperatureC:t.current.temp_c,temperatureF:t.current.temp_f,windDirection:t.current.wind_dir,windKph:t.current.wind_kph,windMph:t.current.wind_mph},i.src=g.iconUrl,r.innerText=g.country,o.innerText=g.city,a.innerText=g.state,c.innerText=g.lastUpdated,d.innerText=g.temperatureC,function(e){const t=document.getElementById("windDirection");t.className="";const n="arrow"+10*e;t.className=n}(e[g.windDirection].angle),m.innerText=g.windKph,l.className="shadeColor",s.className="",u.className="",h.className="shadeColor"}catch(e){console.error(e)}})),s.addEventListener("click",(()=>{d.innerText=g.temperatureC,l.className="shadeColor",s.className=""})),l.addEventListener("click",(()=>{d.innerText=g.temperatureF,l.className="",s.className="shadeColor"})),u.addEventListener("click",(()=>{m.innerText=g.windKph,u.className="",h.className="shadeColor"})),h.addEventListener("click",(()=>{m.innerText=g.windMph,u.className="shadeColor",h.className=""}))}))})();