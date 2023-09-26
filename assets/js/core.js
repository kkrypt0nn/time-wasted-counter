// Get always put the current year in the copyright footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Will play or pause the music
document.getElementById("toggleMusic").addEventListener("click", function () {
    var musicSrc = document.getElementById("music");
    var musicText = document.getElementById("musicStatus");
    if (musicSrc.paused) {
        musicSrc.play();
        musicText.innerHTML = "off";
        return;
    }
    musicSrc.pause();
    musicText.innerHTML = "on";
});

var counter = 0;
var count = document.getElementById("count");
var isPaused = false;

// Will play or pause the counter
document.getElementById("toggleCounter").addEventListener("click", function () {
    var counterText = document.getElementById("counterStatus");
    isPaused = !isPaused;
    if (isPaused) {
        counterText.innerHTML = "continued";
        return;
    }
    counterText.innerHTML = "stopped";
});

increaseCount();
setInterval(increaseCount, 1000);

function increaseCount() {
    if (!isPaused) {
        counter++;
        var days = Math.floor(counter / (3600 * 24));
        var hours = Math.floor(counter % (3600 * 24) / 3600);
        var minutes = Math.floor(counter % 3600 / 60);
        var seconds = Math.floor(counter % 60);

        // Makes sure it doesn't show units when it's 0 and shows plural only when needed
        var daysDisplay = days > 0 ? "<strong>" + days + "</strong>" + (days == 1 ? " day, " : " days, ") : "";
        var hoursDisplay = hours > 0 ? "<strong>" + hours + "</strong>" + (hours == 1 ? " hour, " : " hours, ") : "";
        var minutesDisplay = minutes > 0 ? "<strong>" + minutes + "</strong>" + (minutes == 1 ? " minute, " : " minutes, ") : "";
        var secondsDisplay = seconds > 0 ? "<strong>" + seconds + "</strong>" + (seconds == 1 ? " second" : " seconds") : "";

        // If you get to show days you're insane...
        count.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
    }
}
