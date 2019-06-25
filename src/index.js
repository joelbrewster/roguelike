// Log keypress events to the console
document.addEventListener("keydown", ev => console.log(ev.key));

const canvas = document.querySelector("#game");

import TextGrid from "overprint/overprint/text-grid";

const grid = new TextGrid(canvas);

grid.render();
