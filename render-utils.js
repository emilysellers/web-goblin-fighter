export function renderGoblin(goblin) {
    const li = document.createElement('li');

    const name = document.createElement('span');
    name.textContent = goblin.name;

    const goblinImage = document.createElement('img');
    goblinImage.src = `assets/${goblin.type}.png`;

    const goblinHP = document.createElement('span');
    goblinHP.textContent = goblin.hp;

    li.append(name, goblinImage, goblinHP);
    return li;
}
