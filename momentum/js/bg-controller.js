import {getTimeOfDay, getRandomNum} from './utils.js'
import {LOCAL_STORAGE_KEY} from './constants.js'



// function getSlideNext() {
//     // получить текущий номер картинки
//     if(randomNum == 20) {
//         randomNum == 1;
//     } else {
//         randomNum += 1;
//     }
//     setBG()
// }
// function getSlidePrev() {
//     // получить текущий номер картинки
//     if(randomNum == 1) {
//         randomNum == 20
//     } else {
//         randomNum -= 1;
//     }
//     setBG()
// }

export const setInitRandomBg = () => {
    const img = new Image();
    const body = document.querySelector('body')
    const timeOfDay = getTimeOfDay()

    const randomInt = getRandomNum(20);
    localStorage.setItem(LOCAL_STORAGE_KEY.IMAGE_NUM, randomInt)

    const bgNum = String(randomInt).padStart(2,'0');

    img.src = `https://raw.githubusercontent.com/BugaevAnton/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    };
}

const changeImage = (num) => {
    const imageLimit = 20;

    const currentImageValue = localStorage.getItem(LOCAL_STORAGE_KEY.IMAGE_NUM)
    const currentImageNum = Number(currentImageValue)
    let newImageNum = currentImageNum + num
    

    if (newImageNum >= imageLimit) {
        newImageNum = 1
    } else if (newImageNum <= 0) {
        newImageNum = imageLimit
    }

    localStorage.setItem(LOCAL_STORAGE_KEY.IMAGE_NUM, newImageNum)

    const img = new Image();
    const body = document.querySelector('body')
    const timeOfDay = getTimeOfDay()
    const formattedNewImageNum = String(newImageNum).padStart(2,'0');

    img.src = `https://raw.githubusercontent.com/BugaevAnton/stage1-tasks/assets/images/${timeOfDay}/${formattedNewImageNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    };
}

export const setInitHandlers = () => {
    const next = document.querySelector('.slide-next');
    const prev = document.querySelector('.slide-prev');

    next.addEventListener("click", () => changeImage(1))
    prev.addEventListener("click", () => changeImage(-1))
}