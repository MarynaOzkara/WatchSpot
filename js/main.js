const slider = document.querySelector(".slider-list");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const counter = document.querySelector('#counter');
const sliderList = document.querySelector('.slider-list');
let counterValue = 1;
const sliderLength = sliderList.children.length;

console.log(sliderList.children.length);

function updateCounterValue() {
 counter.textContent = counterValue;
}
function countNext() {
    if(counterValue <= sliderLength - 1) {
        counterValue++;
        updateCounterValue();
    }
   
}
function countPrev() { 
    if(counterValue <= 1) {
            counterValue = 1;
            updateCounterValue();
        } else {
            --counterValue;
    updateCounterValue();
        }
    
}

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
next.addEventListener('click', countNext);
prev.addEventListener('click', countPrev);