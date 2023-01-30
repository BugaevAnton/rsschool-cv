//Start Blur//
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
//End Blur//


//select btn start//
const optionMenu = document.querySelector('.select-menu'),
        selectBtn = optionMenu.querySelector('.select-btn'),
        options = optionMenu.querySelectorAll('.option'),
        Btn_text = optionMenu.querySelector('.Btn_text'),
        optiontext = optionMenu.querySelector('.option-text'),
        card = document.querySelector('.contacts_cards_active');

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

optiontext.addEventListener('click', () => card.classList.add('card'));

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        let selectedOption = option.querySelector('.option-text').innerText;
        Btn_text.innerText = selectedOption;

        optionMenu.classList.toggle('active');
    })
})
//select btn end//

//accordion start//
document.querySelectorAll('.accordion_item_trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion_item--active')) {
            parent.classList.remove('accordion_item--active');
        } else {
            document
                .querySelectorAll('.accordion_item')
                .forEach((child) => child.classList.remove('accordion_item--active'))

            parent.classList.add('accordion_item--active');
        }

    })
)
//accordion end


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

