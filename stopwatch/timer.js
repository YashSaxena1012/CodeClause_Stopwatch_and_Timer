  let mins = document.getElementById('minutes');
let secs = document.getElementById('seconds');
let display = document.querySelector('.display');
let startbtn = document.getElementsByClassName('start');
let pausebtn = document.getElementsByClassName('pause');
let stopbtn = document.getElementsByClassName('stop');
let resetbtn = document.getElementsByClassName('reset');
let timer;
const progressBar = document.querySelector('.progress-bar');
const dispTime = () => {
    let minutes = parseInt(mins.value);
    let seconds = parseInt(secs.value);
  
    if (isNaN(seconds)) {
      seconds = 0;
    }
    if (isNaN(minutes)) {
      minutes = 0;
    }
    
    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    
    const displayMinutes = minutes > 9 ? minutes : '0' + minutes;
    const displaySeconds = seconds > 9 ? seconds : '0' + seconds;
    
    display.innerHTML = `${displayMinutes}:${displaySeconds}`;
}
var progress;
function start() {
    if (!timer) {
        timer = setInterval(run, 1000);
        
    }
}
function run() {
    let m = parseInt(mins.value);
    let s = parseInt(secs.value);
    s--;
    
    if (s < 0) {
        s = 59;
        m--;
    }
    
    if (m < 0) {
        document.body.style.background = "red";
        stop();
        return;
    }
    
    const totalTime = parseInt(mins.value) * 60 + parseInt(secs.value);
    const remainingTime =totalTime- (parseInt(m) * 60 + parseInt(s));
    const progress = (remainingTime/ totalTime) * 100;
    progressBar.style.width = `${progress}%`;
    if (isNaN(m)) {
        m = 0;
    }
    if (isNaN(s)) {
        s = 0;
    }
    const displayMinutes = m > 9 ? m : `0${m}`;
    const displaySeconds = s > 9 ? s : `0${s}`;
    display.innerHTML = `${displayMinutes}:${displaySeconds}`;
    mins.value = m;
    secs.value = s;
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function stop() {
    clearInterval(timer);
    timer = null;
    progressBar.style.width = '100%';
}

function reset() {
    stop()
    mins.value = '';
    secs.value = '';
    display.innerHTML = '00:00';
    progressBar.style.width = '0%';
    document.body.style.background="white"
}
