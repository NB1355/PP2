
// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');

// Listen for submit events
form.addEventListener('submit', handleSubmit);

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit (event) {

	// Stop the form from reloading the page
	event.preventDefault();
}


// this.document.getElementById("x1-button").style.display = "block";

// document.getElementById("x1-button").addEventListener("click", function (testStatus) {
//     console.log(testStatus);
//     testStart();
// });






// addEventListener("click", function () {

//     if (document.getElementById('x1-radio').checked == true) {
//         this.document.getElementById("x2-button").style.display = "none";
//     } else {
//         this.document.getElementById("x2-button").style.display = "block";
//     }
// });



// function testStart() {
//     console.log("finction is working!!!!");
//     this.document.getElementById("x1-button").style.display = "none";
//     let testStatus = "runnning"; 

//     this.document.getElementById("x2-button").style.display = "none";   

// }




// // Timer Start 

// var countDownDate = new Date(2022, 12, 20, 15, 0, 0, 0).getTime();

// var x = setInterval(function () {


//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   // Time calculations 
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = hours + "h " +
//     minutes + "m " + seconds + "s ";

// //  Shoe time of!!! pop a massage?????
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "Time is OFF!";
//   }
// }, 1000);

// // Timer End 


