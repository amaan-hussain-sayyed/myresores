const apikey = "caf902c1f4c39eda924f0abb3469b7ee";

const weatherdDataEl = document.getElementById("weather-data");
 
const CityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit",(e)=>{

    e.preventDefault()
    const cityValue = CityInputEl.value

    getWeatherData(cityValue)
    
  }
)


 async function getWeatherData(value){
   try {
         
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apikey}&units=metric`)

        if(!response.ok){
            throw new Error("network response was not ok")
        }

        const data = await response.json()

        console.log(data)
        const temprature = Math.round(data.main.temp)
        console.log("this is temp  ",temprature)
    
        const description = data.weather[0].description
    
        const icon = data.weather[0].icon
 
        const details = [
            `feels like:${Math.round(data.main.feels_like)}°C `,
            `Humidity : ${data.main.humidity}`,
            `Wind speed: ${data.wind.speed} m/s`,
      ]

        console.log(details)
        weatherdDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather Icon">`

        weatherdDataEl.querySelector(".tempreture").textContent = `${temprature}°C`

        weatherdDataEl.querySelector(".description").textContent = `${description}`

        weatherdDataEl.querySelector(".details").innerHTML = details.map(
          (detail)=> `
            <div>${detail}</div>
        `).join("")



   } catch (error) {
    const details = [
      `cannot find city or country please try again`,
]
    weatherdDataEl.querySelector(".icon").innerHTML = ""
    weatherdDataEl.querySelector(".tempreture").textContent = "404 Found"

    weatherdDataEl.querySelector(".description").textContent = ""

    weatherdDataEl.querySelector(".details").innerHTML = details.map(
      (detail)=> `
        <div>${detail}</div>
    `).join("")
    
   }
}