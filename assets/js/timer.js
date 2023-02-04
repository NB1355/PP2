const TIME_LIMIT = 10;


let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;



function onTimesUp() {
  clearInterval(timerInterval);
  document.getElementById("timeBar").style.maxWidth ;
  questionSubmit();
}

function startTimer() {

if (testMode == true ) {

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("app").innerHTML = formatTime(timeLeft);
    
    var timeLeftPercent = timeLeft / TIME_LIMIT * 100 ;
    document.getElementById("demo1").innerHTML = timeLeftPercent + "%";

    document.getElementById("timeBar").style.width = timeLeftPercent + "%";

    
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
  
}

// learn mode
else {

  TIME_LIMIT=0;
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timePassed;
    document.getElementById("app").innerHTML = formatTime(
      timePassed
    );
  
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}


