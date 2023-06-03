const slider = document.querySelector(".slider-list");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");

const mySiema = new Siema ({
    selector: slider,
    loop: false,
    duration: 500,
});

function onNextClick() {
   mySiema.next();
};
function onPrevClick() {
    mySiema.prev();
 };

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);
