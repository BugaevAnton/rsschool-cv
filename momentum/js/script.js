
import { getRandomNum } from './utils'

function showTime() {
    const time = document.querySelector('.time')
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    setTimeout(showTime, showDate, showGreeting, 1000);
}

function showDate() {
    const options = {month: 'long', weekday: 'long', day: 'numeric', timeZone: 'UTC'};
    const dateTime = document.querySelector('.date')
    const date = new Date()
    const currentDate = date.toLocaleDateString('en-US', options);
    dateTime.textContent = currentDate
    setTimeout(showDate, 1000);
}

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

function showGreeting() {
    const greeting = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    const greetingText =`Good ${timeOfDay}`;
    greeting.textContent = greetingText;
    setTimeout(showGreeting, 1000)
};

function getLocalStorage() {
    // city.value = 'Minsk';
    if(localStorage.getItem("name")) {
        userName.value = localStorage.getItem("name");
    }
}

function setLocalStorage() {
    const userName = document.querySelector(".name");
    localStorage.setItem ("name", userName.value);
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


async function getWeather() {  
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const weatherError = document.querySelector('.weather-error');
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=eng&APPID=9bc7071f5a8fb9352b740dce6deb0d3f&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    city.placeholder = '[Enter city]';
    weatherIcon.className = 'weather-icon owf';
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.main.humidity);
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
}


function setCity(event) {
    if (event.code === 'Enter') {
        city.blur();
        getWeather();
    }
}


let randomNum = getRandomNum; // todo удалить

function getSlideNext() {
    // получить текущий номер картинки
    if(randomNum == 20) {
        randomNum == 1;
    } else {
        randomNum += 1;
    }
    setBG()
}
function getSlidePrev() {
    // получить текущий номер картинки
    if(randomNum == 1) {
        randomNum == 20
    } else {
        randomNum -= 1;
    }
    setBG()
}

const initLoad = () => {
    showTime();
    showDate();
    getTimeOfDay();
    showGreeting();
    setBG();

    window.addEventListener("beforeunload", setLocalStorage)
    window.addEventListener("DOMContentLoaded", getLocalStorage)

    
    const next = document.querySelector('.slide-next');
    const prev = document.querySelector('.slide-prev');

    next.addEventListener("click", getSlideNext)
    prev.addEventListener("click", getSlidePrev)
}

initLoad();




const city = document.querySelector(".city");







// change background end

// weather start
    // const city = document.querySelector('.city');

    // getWeather()

    
    city.addEventListener("change",()=>{getWeather(city)});
    document.addEventListener('DOMContentLoaded', getWeather);

    function setCityLocalStorage() {
        localStorage.setItem ("city", city.value);
        }
      window.addEventListener("beforeunload", setCityLocalStorage)
      
      function getCityLocalStorage() {
        if(localStorage.getItem("city")) {
            city.value = localStorage.getItem("city");
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

function getRandomNumQ() {
    const numRandom = Math.floor(Math.random() * 10) + 1;
    return numRandom;
}
    
async function getQuotes() {
    // const quotes = 'data.json';
    // const res = await fetch(quotes);
    // const data = await res.json(); 
    const random = getRandomNumQ();

    quote.textContent = data[random].text
    author.textContent = data[random].author
}
getQuotes();
changeQuote.addEventListener("click", getQuotes);


//quote end

//audio start

import playList from "./playList.js";
    console.log(playList);

const playBtn = document.querySelector('.play');
const audio = new Audio();
let playNum = 0;
let isPlay = false;

function playAudio() {
    audio.src = playList[playNum].src;
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

// const playList =  getElement('.play-list');
const li = document.createElement('li');
li.classList.add ('play-item');
for(let i = 0; i < playList.length; i++) {
  li.textContent = `${playList[i].title}`;
  playListContainer.append(li);
}


//audio end