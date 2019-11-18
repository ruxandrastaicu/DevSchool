
let seconds = 0;
let minutes = 0;
let hours = 0;

let status = "stopped";

function stopWatch() {

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

    }
    document.getElementById("stopwatch").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

}

function startStop() {
        if (status === "stopped") {
            interval = window.setInterval(stopWatch, 1000);
            document.getElementById("startStop").innerHTML = "Stop";
            status = "started";
        }
        else {
            window.clearInterval(interval);
            interval = null;
            document.getElementById("startStop").innerHTML = "Start";
            status = "stopped";
        }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}