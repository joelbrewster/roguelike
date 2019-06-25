// Log keypress events to the console
document.addEventListener("keydown", ev => console.log(ev.key));

const canvas = document.querySelector("#game");

import Font from "overprint/overprint/font";
import Cell from "overprint/overprint/cell";
import TextGrid from "overprint/overprint/text-grid";

const width = 40;
const height = 30;

const grid = new TextGrid(canvas, {
    width,
    height,
    font: Font("Menlo", false, 15)
});

grid.writeCell(40, 25, Cell("@"));

grid.render();
