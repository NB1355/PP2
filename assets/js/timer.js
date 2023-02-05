

const TIME_LIMIT = 20;


let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;


function onTimesUp() {
  clearInterval(timerInterval);

  questionSubmit();
}

function startTimer() {

  if (testMode == true) {

    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("app1").innerHTML = formatTime(timeLeft);
      document.getElementById("app2").innerHTML = timeLeft;

      var timeLeftPercent = timeLeft / TIME_LIMIT;

      // document.getElementById("timeBar").style.width = timeLeftPercen;

      if (timeLeft == 0) {
        onTimesUp();
      }
    }, 1000);

  }

  // learn mode
  // else {

  //   TIME_LIMIT=0;
  //   timerInterval = setInterval(() => {
  //     timePassed = timePassed += 1;
  //     timeLeft = timePassed;
  //     document.getElementById("app").innerHTML = formatTime(
  //       timePassed
  //     );

  //     if (timeLeft === 0) {
  //       onTimesUp();
  //     }
  //   }, 1000);
  // }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}


// function timeBarColor (timeBar){
//   switch(){
//     case timeBar < 
//   }
// }






function timeNow() {
  
  const dateTime = new Date();
  getTimeDemo();

  function getTimeDemo() {
    document.getElementById("demo1").innerHTML = dateTime;
    document.getElementById("demo2").innerHTML = dateTime.getTime();
    document.getElementById("demo3").innerHTML = dateTime.getHours();
    document.getElementById("demo4").innerHTML = dateTime.getMinutes();
    document.getElementById("demo5").innerHTML = dateTime.getSeconds();
    document.getElementById("demo6").innerHTML = dateTime.getMilliseconds();
  }
}