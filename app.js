/* Imports */
import { renderGoblin } from './render-utils.js';
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const messageSection = document.getElementById('message-section');
const scoreboardSection = document.getElementById('scoreboard-section');
const goblinList = document.getElementById('goblin-list');
const userImage = document.getElementById('user-image');
const userHPDisplay = document.getElementById('user-hp');
const addGoblinForm = document.getElementById('add-goblin-form');

/* State */
let message = 'Time to fight some goblins!';
//let scoreboard = 'You have defeated 0 goblin(s).';
let goblins = [
    { name: 'Bronco', type: 'goblin', hp: 8 },
    { name: 'Sal', type: 'ghoul', hp: 6 },
];
let user = {
    type: 'hero',
    hp: 10,
};
let defeated = 0;

/* Probability array */
const goblinAttacks = [0, 1, 1, 2, 2, 2, 3];
const userAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
const goblinTypes = ['goblin', 'goblin', 'ghoul', 'ghoul', 'ghoul', 'ogre'];

/* Events */
// add a goblin
addGoblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addGoblinForm);
    const goblinType = getRandomItem(goblinTypes);
    const goblin = {
        name: formData.get('name'),
        type: goblinType,
        hp: 10,
    };
    goblins.push(goblin);

    message = `${goblin.name} has joined the battle.`;
    displayGoblins();
    displayMessage();
});
// remove dead goblins

/* Display Functions */
function displayMessage() {
    messageSection.textContent = message;
}

function displayScoreboard() {
    scoreboardSection.textContent = `You have defeated ${defeated} goblins.`;
}

function displayUser() {
    if (user.hp === 0) {
        userImage.src = 'assets/deaduser.png';
        message = `Bummer, you're dead. `;
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
            const userAttackDamage = getRandomItem(userAttacks);
            const goblinAttackDamage = getRandomItem(goblinAttacks);
            // update goblin hp
            goblin.hp = Math.max(0, goblin.hp - userAttackDamage);
            // update user hp
            user.hp = Math.max(0, user.hp - goblinAttackDamage);
            // update message

            message = '';
            if (userAttackDamage === 0) {
                message += 'You missed. ';
            } else {
                message += `You hit ${goblin.name} and did ${userAttackDamage} in damage. `;
            }

            if (goblinAttackDamage === 0) {
                message += `${goblin.name} missed you. `;
            } else {
                message += `${goblin.name} hit you and did ${goblinAttackDamage} in damage. `;
            }
            // update scoreboard

            // update displays
            if (goblin.hp < 1) {
                defeated++;
                displayScoreboard();
            }

            displayUser();
            displayGoblins();
            displayMessage();
        });
    }
}

// Call display functions to run on page load
displayMessage();
displayScoreboard();
displayGoblins();
displayUser();
