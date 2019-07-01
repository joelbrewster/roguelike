/*jshint esversion: 6 */

import TextGrid from "overprint/overprint/text-grid";
import Font from "overprint/overprint/font";
// import Cell from "overprint/overprint/cell";
import Screen from './screen';

const canvas = document.querySelector('#game');

const width = 80;
const height = 50;

const player = {
    x: Math.floor(width / 2),
    y: Math.floor(height / 2)
}

let action;

function input(key) {
    switch(key) {
    case 'k': action = { x: 0, y: -1 }; break;
    case 'j': action = { x: 0, y: 1 }; break;
    case 'h': action = { x: -1, y: 0 }; break;
    case 'l': action = { x: 1, y: 0 }; break;
    }
}

document.addEventListener('keydown', (ev) => input(ev.key));

function update() {
    if (action) {
        // TODO: Make it so the player repeats the world?
        player.x = Math.min(width - 1, Math.max(0, player.x + action.x));
        player.y = Math.min(height - 1, Math.max(0, player.y + action.y));
        action = null;
    }
}

const screen = new Screen(canvas, width, height);

function gameLoop() {
    update();
    screen.render(player);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
