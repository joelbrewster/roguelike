/*jshint esversion: 6 */

import TextGrid from "overprint/overprint/text-grid";
import Font from "overprint/overprint/font";
import Cell from "overprint/overprint/cell";

class Screen {
    constructor(canvas, width, height) {
        this.grid = new TextGrid(canvas, {
            width,
            height,
            font: Font("Menlo", false, 15)
        });
    }

    render(player) {
        this.grid.clear();
        this.grid.writeCell(player.x, player.y, Cell("@"));
        this.grid.render();
    }
}

export default Screen;
