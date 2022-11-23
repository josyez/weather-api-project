import axios from "axios";
// require("dotenv").config();

// const API_KEY = process.env.API_KEY

async function fetchWeather(city){
  try {
    const weatherData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=e77f35aec44345d082b232322221611&q=${city}&days=3&aqi=no&alerts=no`);
  //  console.log(weatherData);
    if(weatherData.status == 200){
        console.log(weatherData.data);
        return weatherData.data;
      }
      else{
        return null;
      }
  }

  catch(error){
    console.log("uh oh theres an error", error);
  handleError()
    }

  }
  
  fetchWeather("Bronx");


  const form = document.getElementById("form")
  const input = document.getElementById("city")

  const cityName = document.getElementById("city-name")

  const todaysMax = document.getElementById("todays-maxtemp")
  const todaysMin = document.getElementById("todays-mintemp")
  
  const tomorrowsMax = document.getElementById("tomorrows-maxtemp")
  const tomorrowsMin = document.getElementById("tomorrows-mintemp")

  const dayafterMax = document.getElementById("dayafter-maxtemp")
  const dayafterMin = document.getElementById("dayafter-mintemp")


  form.addEventListener("submit", async function(e){
    e.preventDefault()
    const userInput = input.value 
    const forecastData = await fetchWeather(userInput)
    console.log(forecastData);
console.log(forecastData.forecast.forecastday);

cityName.innerText = forecastData.location.name

todaysMax.innerText = `Highest ${forecastData.forecast.forecastday[0].day.maxtemp_f}`
todaysMin.innerText = `Lowest ${forecastData.forecast.forecastday[0].day.mintemp_f}`


tomorrowsMax.innerText = `Highest ${forecastData.forecast.forecastday[1].day.maxtemp_f}`
tomorrowsMin.innerText = `Lowest ${forecastData.forecast.forecastday[1].day.mintemp_f}`
// console.log(tomorrowsMaxTemp, todaysMinTemp);

dayafterMax.innerText = `Highest ${forecastData.forecast.forecastday[2].day.maxtemp_f}`
dayafterMin.innerText = `Lowest ${forecastData.forecast.forecastday[2].day.mintemp_f}`

// console.log(dayafterMaxTemp, dayafterMinTemp);
  })

  function handleError(){
    const errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML=("try again")
    const todayElements = document.querySelectorAll(".today")
    console.log(todayElements);
    todayElements.forEach((element) => {
      element.innerHTML=("")
    })
  }





