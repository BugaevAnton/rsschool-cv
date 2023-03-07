import {getTimeOfDay} from './utils.js'

export function showDate() {
    const options = {month: 'long', weekday: 'long', day: 'numeric', timeZone: 'UTC'};
    const dateTime = document.querySelector('.date')
    const date = new Date()
    const currentDate = date.toLocaleDateString('en-US', options);
    dateTime.textContent = currentDate
    setTimeout(showDate, 1000 * 60 * 60);
}

export function showGreeting() {
    const greeting = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    const greetingText =`Good ${timeOfDay}`;
    greeting.textContent = greetingText;    
    setTimeout(showGreeting, 1000 * 60 * 60)
};

export function showTime() {
    const time = document.querySelector('.time')
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    setTimeout(showTime, 1000);
}

