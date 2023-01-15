const point1 = '1 10\n';
const point2 = '2 20\n';
const point3 = '3 48\n';
const point4 = '4 12\n';
const point5 = '5 20\n';

console.log(point1, point2, point3, point4, point5);
(function (){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close, .header_nav');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click' , () => {
        menu.classList.remove('header_nav_active')
    });
    if (window.innerWidth <= 380)  {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active')
            });
        }
    }
}());

(function (){
    const [btnGardens,btnLawn,btnPlanting] = document.querySelectorAll('.btn');
    const planting = document.querySelectorAll('.planting');
    const lawn = document.querySelectorAll('.lawn_care');
    const garden = document.querySelectorAll('.garden_care');
    const serviceCard = document.querySelectorAll('.service_card');
    btnGardens.addEventListener('click', (e) => {
        toggleActive(e.target);
        clearElements(serviceCard);
        blurElements(planting);
        blurElements(lawn);
    });

    btnLawn.addEventListener('click', (e) => {
        toggleActive(e.target);
        clearElements(serviceCard);
        blurElements(planting);
        blurElements(garden);
    });

    btnPlanting.addEventListener('click', (e) => {
        toggleActive(e.target);
        clearElements(serviceCard);
        blurElements(lawn);
        blurElements(garden);
    });
}());

function blurElements (elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('blur');
    }
}
function toggleActive (button) {
    button.classList.toggle('active');
};

function clearElements (elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('blur');
    }
}

