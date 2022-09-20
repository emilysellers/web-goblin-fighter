/* Imports */
import { renderGoblin } from './render-utils.js';

/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const scoreboardSection = document.getElementById('scoreboard-section');
const goblinList = document.getElementById('goblin-list');

/* State */
let message = '(message to user will go here)';
let scoreboard = 'You have defeated 0 goblin(s).';
let goblins = [
    { name: 'Bronco', type: 'goblin', hp: 9 },
    { name: 'Birdy', type: 'ogre', hp: 0 },
    { name: 'Sal', type: 'ghoul', hp: 5 },
];

/* Events */

/* Display Functions */
function displayMessage() {
    messageSection.textContent = message;
}

function displayScoreboard() {
    scoreboardSection.textContent = scoreboard;
}

function displayGoblins() {
    goblinList.innerHTML = '';

    for (const goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinList.append(goblinEl);

        //event listener
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayMessage();
displayScoreboard();
displayGoblins();
