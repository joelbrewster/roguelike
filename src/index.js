// Log keypress events to the console
document.addEventListener("keydown", ev => console.log(ev.key));

const canvas = document.querySelector("#game");

import Font from "overprint/overprint/font";
import TextGrid from "overprint/overprint/text-grid";

const grid = new TextGrid(canvas, {
    width: 80,
    height: 50,
    font: Font("Menlo", false, 15)
});

grid.render();
