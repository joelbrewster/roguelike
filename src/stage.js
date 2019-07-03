/*jshint esversion: 6 */

import Tiles from "./tiles";

class Stage {
    constructor(width, height, player) {
        this.width = width;
        this.height = height;
        this.map = this.initializeMap();
        this.player = player;
    }

    canMoveTo(x, y) {
        return !this.map[y][x].blocking;
    }

    initializeMap() {
        const tiles = [];

        for (let y=0; y < this.height; y++) {
            tiles[y] = [];
            for (let x=0; x < this.width; x++) {
                tiles[y][x] = Tiles.FLOOR;
            }
        }

        tiles[30][22] = Tiles.WALL;
        tiles[31][22] = Tiles.WALL;
        tiles[32][22] = Tiles.WALL;

        return tiles;
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
