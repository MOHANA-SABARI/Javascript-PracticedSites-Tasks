
var seconds = document.getElementById("sec");
var minute = document.getElementById("min");
var hours = document.getElementById("hour");
var a = 0; 
var b = 0;
var c = 0;
var timerstart = document.getElementById("start");
var timerstop = document.getElementById("stop");
var timerrestart = document.getElementById("restart");
var ms;

timerstart.addEventListener("click", function() {
    if (!ms) { // Prevent multiple intervals
        ms = setInterval(timer, 1000);
    }
});

timerstop.addEventListener("click", function() {
    clearInterval(ms);
    ms = null;
});

timerrestart.addEventListener("click", function() {
    clearInterval(ms);
    ms = null;
    a = 0;
    b = 0;
    c = 0;
    updateDisplay();
});

function updateDisplay() {
    seconds.innerHTML = a < 10 ? "0" + a : a;
    minute.innerHTML = b < 10 ? "0" + b : b;
    hours.innerHTML = c < 10 ? "0" + c : c;
}

function timer() {
    a++;
    if (a >= 60) {
        a = 0;
        b++;
        if (b >= 60) {
            b = 0;
            c++;
            if (c >= 24) {
                c = 0;
            }
        }
    }
    updateDisplay();
}
