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

function setLocalStorage() {
    localStorage.setItem("name", userName.value);
  }
  window.addEventListener("beforeunload", setLocalStorage)
  
  function getLocalStorage() {
    if(localStorage.getItem("name")) {
        userName.value = localStorage.getItem("name");
    }
  }
  window.addEventListener("load", getLocalStorage)
//   document.addEventListener("DOMContentLoaded", getLocalStorage);
//   setLocalStorage()
//   getLocalStorage()

// change background
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
