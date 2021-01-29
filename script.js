'use strict'
//variables
const desc = document.getElementById('desc');
const minTime = document.getElementById('span-timer-min');
const secTime = document.getElementById('span-timer-sec');
const buttonPause = document.getElementById('butt-pause');
const buttonPlay = document.getElementById('butt-play');
const buttonReset = document.getElementById('butt-reset');

let maxMin = 24;
let maxSec = 59;
let maxMinBrk = 4;
let holdMinRecord = maxMin;
//logic

buttonPause.addEventListener('click',pauseWatch);
buttonPlay.addEventListener('click', playWatch);
buttonReset.addEventListener('click', refresh);

function refresh()
{
    location.reload();
}
function pauseWatch(){
    intervaltime = clearInterval(intervalTime);
}

function playWatch(){
    intervalTime = setInterval(decreaseTime,1000);
}


function decreaseTime(){
    minTime.innerHTML = maxMin;
    secTime.innerHTML = maxSec;
    maxSec--;

    if(maxSec === -1){
        maxMin--;
        maxSec = 59;
    }

    if(maxMin === -1 && holdMinRecord === 24){
        maxMin = maxMinBrk;
        holdMinRecord = maxMinBrk;
        desc.innerHTML = 'BREAK'
    }

    if(maxMin === -1 && holdMinRecord === 4 ){
        maxMin = 24;
        desc.innerHTML = 'WORK'

    }
}

let intervalTime = setInterval(decreaseTime, 1000);
