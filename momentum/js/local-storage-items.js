import {LOCAL_STORAGE_KEY} from './constants.js'

export const setInitData = () => {
    const nameInput = document.querySelector('.name')
    if (nameInput) {      
        window.addEventListener("beforeunload", () => {
            localStorage.setItem(LOCAL_STORAGE_KEY.USER_NAME, nameInput.value)
        })
    }
    const initNameValue = localStorage.getItem(LOCAL_STORAGE_KEY.USER_NAME)
    if (nameInput && initNameValue) {
        nameInput.value = initNameValue
    }
}

export const setInitCity = () => {
    const cityInput = document.querySelector('.city');
    
    if (cityInput) {
        window.addEventListener("beforeunload", () => {
            localStorage.setItem(LOCAL_STORAGE_KEY.CITY, cityInput.value)
        })
    }
    const initCityValue = localStorage.getItem(LOCAL_STORAGE_KEY.CITY)
    if (cityInput && initCityValue) {
        cityInput.value = initCityValue
    }
}