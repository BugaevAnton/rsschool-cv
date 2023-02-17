const time = document.querySelector('.time')


// console.log(currentTime);
// console.log(date);
// console.log(time)
// time.textContent = "Text";

function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    setTimeout(showTime, 1000);
}
showTime();