let countValue = 0;
let intervalId = null;

function startCounter() {
    intervalId = setInterval(() => {
        countValue++;
        document.querySelector('#count').innerText = countValue;
    }, 1000);
}

function pauseCounter() {
    clearInterval(intervalId);
}

function resumeCounter() {
    startCounter();
}

function stopCounter() {
    clearInterval(intervalId);
    countValue = 0;
    document.querySelector('#count').innerText = countValue;
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonId = event.target.id;
        switch (buttonId) {
            case 'startBtn':
                startCounter();
                break;
            case 'pauseBtn':
                pauseCounter();
                break;
            case 'resumeBtn':
                resumeCounter();
                break;
            case 'stopBtn':
                stopCounter();
                break;
            default:
                break;
        }
    });
});
