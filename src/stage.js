/*jshint esversion: 6 */

import Tiles from "./tiles";
import { generateDungeon } from "./dungeon";

class Stage {
    constructor(width, height, player) {
        this.width = width;
        this.height = height;
        this.map = generateDungeon(width, height);
        this.player = player;
    }

    canMoveTo(x, y) {
        return !this.map[y][x].blocking;
    }

    renderMap(stage) {
        for (let y=0; y < stage.height; y++) {
            for (let x=0; x < stage.width; x++ ) {
                this.grid.writeCell(x, y, Glyps[stage.map[y][x].type])
            }
        }
    }

    renderPlayer(player) {
        this.grid.writeCell(player.x, player.y, Glyps.PLAYER);
    }

    render(stage) {
        this.renderMap(stage);
        this.renderPlayer(stage.player);
        this.grid.render();
    }
}

export default Stage;
