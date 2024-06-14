
let sec = 0;
let min = 0;
let hr = 0;
let ms = 0;

let msH = document.getElementById("ms");
let secH = document.getElementById("sec");
let minH = document.getElementById("min");
let hrH = document.getElementById("hr");

let timer = false;

function start() {
    if (!timer) {
        timer = true;
        fun();
    }
}

function fun() {
    if (timer) {
        ms += 10; 

        if (ms >= 1000) {
            sec += 1;
            ms = 0;
        }
        if (sec >= 60) {
            min += 1;
            sec = 0;
        }
        if (min >= 60) {
            hr += 1;
            min = 0;
        }

        setTimeout(fun, 10);

        msH.innerHTML = ms < 100 ? "0" + ms / 10 : ms / 10; 
        secH.innerHTML = sec < 10 ? "0" + sec : sec;
        minH.innerHTML = min < 10 ? "0" + min : min;
        hrH.innerHTML = hr < 10 ? "0" + hr : hr;
    }
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    sec = 0;
    min = 0;
    hr = 0;
    ms = 0;
    secH.innerHTML = "00";
    minH.innerHTML = "00";
    hrH.innerHTML = "00";
    msH.innerHTML = "00";
}

