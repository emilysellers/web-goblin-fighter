/* Imports */
import { renderGoblin } from './render-utils.js';
// import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const scoreboardSection = document.getElementById('scoreboard-section');
const goblinList = document.getElementById('goblin-list');
//const userDisplay = document.getElementById('user-section');
const userImage = document.getElementById('user-image');
const userHPDisplay = document.getElementById('user-hp');

/* State */
let message = '(message to user will go here)';
let scoreboard = 'You have defeated 0 goblin(s).';
let goblins = [
    { name: 'Bronco', type: 'goblin', hp: 9 },
    { name: 'Birdy', type: 'ogre', hp: 0 },
    { name: 'Sal', type: 'ghoul', hp: 5 },
];
let user = {
    type: 'hero',
    hp: 10,
};
// let userHP = 10;

/* Probability array */
//const goblinAttackDamage = [0, 1, 1, 2, 2, 2, 3];
//const userAttackDamage = [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5];

/* Events */

/* Display Functions */
function displayMessage() {
    messageSection.textContent = message;
}

function displayScoreboard() {
    scoreboardSection.textContent = scoreboard;
}

function displayUser() {
    if (user.hp === 0) {
        userImage.src = 'assets/deaduser.png';
    }
    userHPDisplay.textContent = user.hp;
}

function displayGoblins() {
    goblinList.innerHTML = '';

    for (const goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinList.append(goblinEl);

        //event listener
        goblinEl.addEventListener('click', () => {
            // possible outcomes:
            // 1. goblin is dead,
            if (goblin.hp === 0) {
                //update message
                message = 'This goblin is already dead.';
                displayMessage();
                return;
            }
            // 2. goblin and/or player damaged
            // update goblin hp
            // update player hp
            // update message
            // update scoreboard

            console.log('goblin el clicked');
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayMessage();
displayScoreboard();
displayGoblins();
displayUser();
