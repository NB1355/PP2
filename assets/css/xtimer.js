const storeOpening = new Date('jan 01, 2023 00:00:00');

setCountdown(storeOpening); // Calls setCoundown once

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

    // Now subtract the bigger units of time from the smaller ones

    let daysToDisplay = days;

    // Subtract 24 hours for every day remaining from the hour count
    let hoursToDisplay = hours - (days * 24);
    // Subtract 60 minutes for every hour remaining from the minute count
    let minutesToDisplay = minutes - ( hours * 60 );
    // Subtract 60 seconds for every minute remaining from the seconds count
    let secondsToDisplay = seconds - ( minutes * 60 );

    console.log(daysToDisplay, hoursToDisplay, minutesToDisplay, secondsToDisplay);
    // Countdown now in displayable format!

    // Print to DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.textContent = daysToDisplay;
    hoursEl.textContent = hoursToDisplay;
    minutesEl.textContent = minutesToDisplay;
    secondsEl.textContent = secondsToDisplay;

}
