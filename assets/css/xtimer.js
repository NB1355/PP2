function setCountdown(countingDownTime) {

    let now = new Date();

    let timeRemaining = countingDownTime - now;

    console.log(timeRemaining); // timeRemaining is time left in milliseconds!

    // Now to convert this into time remaining in regular units

    // Seconds
    let seconds = Math.floor(timeRemaining / 1000);
    // Minutes
    let minutes = Math.floor(timeRemaining / (1000*60));
    // Hours 
    let hours = Math.floor(timeRemaining / (1000*60*60));
    // Days
    let days = Math.floor(timeRemaining / (1000*60*60*24));

    console.log(days, hours, minutes, seconds); // Absolute time left in each unit!

}