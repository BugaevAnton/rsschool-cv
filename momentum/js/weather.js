import {setInitCity} from './local-storage-items.js'


export const getWether = async () => {
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const weatherError = document.querySelector('.weather-error');
    const city = {}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value || 'Minsk'}&lang=eng&APPID=9bc7071f5a8fb9352b740dce6deb0d3f&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    city.placeholder = '[Enter city]';
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
}
    // получить город из локал сторидж
    

    function getCityLocalStorage() {
        if(localStorage.getItem("city")) {
            city.value = localStorage.getItem("city");
        } else {
            city.value = 'Minsk';
        }
      }

    function setCity(event) {
        if (event.code === 'Enter') {
            city.blur();
            getWeather();
        }
    }
    
    // запросить данные погоды с учетом города
    function setweather() {
        getCityLocalStorage();
        getWeather(); //здесь не было функции, мучился !!!!!!!!!!!!!!!!!!!1
      }

      window.addEventListener("load", setweather);
      
    // обработать полученные данные
    
    // отобразить результат в виджете


    // city.value - получить из локал сторидж (через константу LOCAL_STORAGE_KEY.WEATHER)

    
    // логика

    // await
    // const res = await fetch(url);
    // const data = await res.json(); 

    // const jsonString = JSON.stringify(data)
    // console.log('data', jsonString)


    // then cb
    // fetch(url).then((data) => {
    //     console.log('FETCHED SUCCESS')
    //     return data
    // }).then((data) => {
    //     return data.json()
    // }).then((data) => {
    //     console.log('SMTH logic')
    // }).catch(e => {
    //     console.log(e)
    // }).finally(() => {
    //     console.log('finally')
    // })
    // console.log('AFTER FETCH')


    // promise
    // const testPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log('setTimeout finished')
    //         // resolve({ someData: 123456 })
    //         reject({ someData: 123456 })
    //     }, 1000)
    // })
    // const promiseResult = await testPromise;
    // console.log('promiseResult', promiseResult)




    // getWether вызвать в new-sctipt
