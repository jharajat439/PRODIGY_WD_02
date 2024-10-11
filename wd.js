let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const lapsDisplay = document.getElementById('laps');

function updateTime() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timeDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    timeDisplay.textContent = '00:00:00';
    lapsDisplay.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = timeDisplay.textContent;
        const lapItem = document.createElement('div');
        lapItem.textContent = lapTime;
        lapsDisplay.appendChild(lapItem);
    }
});
