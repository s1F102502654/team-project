/** @type {HTMLElement} */
const burger = document.querySelector('#burger');
/** @type {HTMLElement} */
const menu = document.querySelector("#menu");

burger.addEventListener('click', () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
})