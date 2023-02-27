

// time start
const time = document.querySelector('.time')
// console.log(currentTime);
// console.log(date);
// console.log(time)
// time.textContent = "Text";
function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    setTimeout(showTime, showDate, showGreeting, 1000);
}
showTime();
// time end
// date start
const dateTime = document.querySelector('.date')
const options = {month: 'long', weekday: 'long', day: 'numeric', timeZone: 'UTC'};

function showDate() {
    const date = new Date()
    const currentDate = date.toLocaleDateString('en-US', options);
    dateTime.textContent = currentDate
    setTimeout(showDate, 1000);
}
showDate();
// date end

// greating start

function getTimeOfDay() {
    const date = new Date()
    const hours = date.getHours();
    if(hours < 6){
    return 'night'
    } else if (hours < 12) { 
        return 'morning'
    } else if (hours < 18) {
        return 'afternoon'
    } else {
        return 'evening'
    }
};
getTimeOfDay()

function showGreeting() {
    const greeting = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    const greetingText =`Good ${timeOfDay}`;
    greeting.textContent = greetingText;
    setTimeout(showGreeting, 1000)
};
showGreeting()
// greating end

const userName = document.querySelector(".name");
const city = document.querySelector(".city");
function setLocalStorage() {
    localStorage.setItem ("name", userName.value);
    }
  window.addEventListener("beforeunload", setLocalStorage)
  
  function getLocalStorage() {
    // city.value = 'Minsk';
    if(localStorage.getItem("name")) {
        userName.value = localStorage.getItem("name");
    }
  }
  window.addEventListener("DOMContentLoaded", getLocalStorage)
//   document.addEventListener("DOMContentLoaded", getLocalStorage);
//   setLocalStorage()
//   getLocalStorage()

// change background start
function getRandomNum() {
    return Math.floor(Math.random() * (21 - 1)) + 1;
}

function setBG() {
    const img = new Image();
    const body = document.querySelector('body');
    let timeOfDay = getTimeOfDay();
    let bgNum = String(getRandomNum()).padStart(2,'0');
    img.src = `https://raw.githubusercontent.com/BugaevAnton/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    };
}
setBG();

const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');

next.addEventListener("click", getSlideNext)
prev.addEventListener("click", getSlidePrev)

let randomNum = getRandomNum;

function getSlideNext() {
    if(randomNum == 20) {
        randomNum == 1;
    } else {
        randomNum += 1;
    }
    setBG()
}
function getSlidePrev() {
    if(randomNum == 1) {
        randomNum == 20
    } else {
        randomNum -= 1;
    }
    setBG()
}
// change background end

// weather start
    // const city = document.querySelector('.city');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const weatherError = document.querySelector('.weather-error') //Что с ним сделать чтоб правильно заработал?
    
    async function getWeather() {  
        console.log(city.value);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=eng&appid=08f2a575dda978b9c539199e54df03b0&units=metric `;
        const res = await fetch(url);
        const data = await res.json(); 
        city.placeholder = '[Enter city]';
        console.log(data)
        
        weatherIcon.className = 'weather-icon owf';
        try {
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            wind.textContent = `wind speed: ${data.wind.speed.toFixed(0)}m/s`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            weatherError.textContent = '';
        } catch (err) {
            weatherError.textContent = `Error! City not found of for '${city.value}'!`;
            temperature.textContent = '';
            weatherDescription.textContent = ''; 
            wind.textContent = '';
            humidity.textContent = '';
        }
        // if(data.cod !='200') {
        //     weatherError.textContent = `Error! City not found of for '${city.value}'!` // Что с ним сделать чтоб правильно заработал?
        // } 
        // console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.main.humidity);
    }
    
    // getWeather()
    function setCity(event) {
        if (event.code === 'Enter') {
            city.blur();
            getWeather();
        }
    }
    
    city.addEventListener('change',()=>{getWeather(city)});
    document.addEventListener('DOMContentLoaded', getWeather);

    function setCityLocalStorage() {
        localStorage.setItem ("city", city.value);
        }
      window.addEventListener("beforeunload", setCityLocalStorage)
      
      function getCityLocalStorage() {
        if(localStorage.getItem("city")) {
            city.value = localStorage.getItem("city");
            console.log(city.value)
        } else {
            city.value = 'Minsk';
        }
      }

      function setweather() {
        getCityLocalStorage();
        getWeather(); //здесь не было функции, мучился !!!!!!!!!!!!!!!!!!!1
      }

      window.addEventListener("load", setweather);
      
//weather end

//quote start
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

function getRandomNum() {
    const numRandom = Math.floor(Math.random() * 10) + 1;
    return numRandom;
}
    
async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    const random = getRandomNum();

    quote.textContent = data[random].text
    author.textContent = data[random].author
}
getQuotes();
changeQuote.addEventListener("click", getQuotes);
//quote end

//audio start

// import playList from "./playList.js";
//     console.log(playList);

const playBtn = document.querySelector('.play');
const audio = new Audio();
let playNum = 0;
let isPlay = false;

    

function playAudio() {
    audio.src = './assets/sounds/Aqua%20Caelestis.mp3';
    audio.currentTime = 0;
    if (!isPlay) {
        isPlay = true;
        audio.play();
        playBtn.classList.add('pause');
    } else {
        isPlay = false;
        audio.pause();
        playBtn.classList.remove('pause');
    }
}
playBtn.addEventListener('click', playAudio);

//audio end