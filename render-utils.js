export function renderGoblin(goblin) {
    const li = document.createElement('li');

    const name = document.createElement('span');
    name.textContent = goblin.name;

    const goblinImage = document.createElement('img');
    if (goblin.hp > 0) {
        goblinImage.src = `assets/${goblin.type}.png`;
    } else {
        goblinImage.src = `assets/dead.png`;
    }

    const goblinHP = document.createElement('span');
    // to do: get random number for initial hp
    goblinHP.textContent = goblin.hp;

    li.append(name, goblinImage, goblinHP);
    return li;
}
