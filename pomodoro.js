// Gather a duration input
// countdown from that duration to 0
// to do this, you take the Date (use date for accuracy) and then
// save the current time, add the duration you want then add that to
// the current time then keep checking the Date time until it equals?
// then update the difference in ".timer"
const date = new Date();
function timer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function countDown() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    countDown();
    let interval = setInterval(countDown, 1000);
    
    document.getElementById("stop-timer").addEventListener('click', function () {
        clearInterval(interval);
    });
}

window.onload = function() {
    let duration = 5;
    let display = document.querySelector(".timer");
    document.getElementById("start-timer").addEventListener('click', function () { 
        timer(duration, display);
      });
}