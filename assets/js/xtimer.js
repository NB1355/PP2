


// document.getElementById("xtest").addEventListener("click", runTimer);

// ------------------------------------------



var timeLimit = new Date("Feb 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var passed = timeLimit - now;

    //   var daysX = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hoursX = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    var minutesX = Math.floor((passed % (1000 * 60 * 60)) / (1000 * 60));
    var secondsX = Math.floor((passed % (1000 * 60)) / 1000);

    document.getElementById("minutes").innerHTML = minutesX.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = secondsX.toString().padStart(2, '0');
    
    document.getElementById("demo1").innerHTML = now;


   
    if (passed < 0) {
        clearInterval(x);
        document.getElementById("demo1").innerHTML = "EXPIRED";
    }
}, 1000);


