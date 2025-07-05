/** @type {HTMLElement} */
const burger = document.querySelector("#burger");
/** @type {HTMLElement} */
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});

const openTriggers = document.querySelectorAll(".type-item");
const modal = document.querySelector("#modal-window");
const overlay = document.querySelector("#modal-overlay");
const closeBtn = document.querySelector("#modal-close-btn");
const modalContent = document.querySelector("#modal-content");

const openModal = (e) => {
    modalContent.innerHTML = e.currentTarget.innerHTML;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

openTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
