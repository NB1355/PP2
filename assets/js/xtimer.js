
setInterval(function(){

    
        const myTime = new Date().getTime();
    
        var hoursX = Math.floor((myTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesX = Math.floor((myTime % (1000 * 60 * 60)) / (1000 * 60));
        var secondsX = Math.floor((myTime % (1000 * 60)) / 1000);
       
        document.getElementById("hours").innerHTML = hoursX.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutesX.toString().padStart(2, '0');
     document.getElementById("seconds").innerHTML = secondsX.toString().padStart(2, '0');  
   
    
}, 
1000);



// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var passed = timeLimit - now;

//     //   var daysX = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    // var hoursX = Math.floor((passed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    // var minutesX = Math.floor((passed % (1000 * 60 * 60)) / (1000 * 60));
    // var secondsX = Math.floor((passed % (1000 * 60)) / 1000);


//     document.getElementById("hours").innerHTML = hoursX.toString().padStart(2, '0');

//     document.getElementById("minutes").innerHTML = minutesX.toString().padStart(2, '0');
//     document.getElementById("seconds").innerHTML = secondsX.toString().padStart(2, '0');
    
//     document.getElementById("demo1").innerHTML = now;


   
//     if (passed < 0) {
//         clearInterval(x);
//         document.getElementById("demo1").innerHTML = "EXPIRED";
//     }
// }, 1000);


