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
            case 'start_button':
                startCounter();
                break;
            case 'pause_button':
                pauseCounter();
                break;
            case 'resume_button':
                resumeCounter();
                break;
            case 'stop_button':
                stopCounter();
                break;
            default:
                break;
        }
    });
});
