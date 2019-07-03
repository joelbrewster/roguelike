/*jshint esversion: 6 */

import Entity from "./entity";
import Stage from "./stage";
import Screen from "./screen";

const canvas = document.querySelector("#game");

const width = 80;
const height = 50;
const player = new Entity(Math.floor(width / 2), Math.floor(height / 2));
const stage = new Stage(width, height, player);

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
        const mx = stage.player.x + action.x;
        const my = stage.player.y + action.y;

        if (stage.canMoveTo(mx, my)) {
            stage.player.x = Math.min(width - 1, Math.max(0, mx));
            stage.player.y = Math.min(height - 1, Math.max(0, my));
        }

        action = null;
    }
}

const screen = new Screen(canvas, width, height);

function gameLoop() {
    update();
    screen.render(stage);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
