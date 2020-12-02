import '../../../index';

(function() {
    const burgerMenuBtn = document.querySelector('.header__burger')
    const menuListUl = document.querySelector('.menu__list--mobile')

    burgerMenuBtn.addEventListener('click', isBurgerClick)

    function isBurgerClick(){
        menuListUl.classList.toggle('active')
        burgerMenuBtn.classList.toggle('active-color')
    }
})()