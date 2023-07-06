const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('[data-modal]');
const body = document.body;


modalOpenBtn.addEventListener('click', onOpen);
modalCloseBtn.addEventListener('click', onClose);

function onOpen() {
    modalEl.classList.add('_active');
    body.classList.add('_locked'); 
}

function onClose() {
    modalEl.classList.remove('_active');
    body.classList.remove('_locked'); 
}

window.addEventListener("keydown", (event) => {
    if(event.code === "Escape") {
        modalEl.classList.remove('_active');
        body.classList.remove('_locked');
    }
})



