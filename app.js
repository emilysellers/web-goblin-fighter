/* Imports */

/* Get DOM Elements */
// const scoreboard = document.getElementById('scoreboard');
const messageSection = document.getElementById('message-section');
const scoreboardSection = document.getElementById('scoreboard-section');

/* State */
let message = 'You hit Daisy and did 4 in damage. Bonzo hit you and did 1 in damage.';
let scoreboard = 'You have defeated 0 goblin(s).';

/* Events */

/* Display Functions */
function displayMessage() {
    messageSection.textContent = message;
}

function displayScoreboard() {
    scoreboardSection.textContent = scoreboard;
}

// (don't forget to call any display functions you want to run on page load!)
displayMessage();
displayScoreboard();
