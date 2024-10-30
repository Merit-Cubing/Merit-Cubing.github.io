let startTime, endTime, timerInterval;
let times = [];
let timerRunning = false;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
    if (startTime) {
        endTime = Date.now();
        clearInterval(timerInterval);
        let time = (endTime - startTime) / 1000;
        times.push(time);
        if (times.length > 5) {
            times.shift();
        }
        updateStats();
        startTime = null;
        timerRunning = false;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (!timerRunning) {
            startTimer();
            timerRunning = true;
        } else {
            stopTimer();
        }
    }
});

document.addEventListener('touchstart', (event) => {
    event.preventDefault();
    if (!timerRunning) {
        startTimer();
        timerRunning = true;
    } else {
        stopTimer();
    }
});

function updateTimer() {
    if (startTime) {
        let elapsedTime = (Date.now() - startTime) / 1000;
        document.getElementById('timer').innerText = elapsedTime.toFixed(3);
    }
}

function updateStats() {
    if (times.length > 0) {
        let averageTime = times.reduce((a, b) => a + b, 0) / times.length;
        document.getElementById('ao5').innerText = averageTime.toFixed(3);
    } else {
        document.getElementById('ao5').innerText = 'N/A';
    }
}
