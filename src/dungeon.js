/*jshint esversion: 6 */

import Tiles from './tiles';
import rung from "rung/src/rung";

function generateDungeon(width, height) {
    const tiles = [];

    for (let y=0; y < height; y++) {
        tiles[y] = [];
        for (let x=0; x < width; x++) {
            tiles[y][x] = Tiles.WALL;
        }
    }

    return tiles
}

class Rect {
    constructor(x, y, width, height) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + width;
        this.y2 = y + height;
    }

    forEach(callback) {
        for (let y=this.y1+1; y < this.y2-1; y++) {
            for (let x=this.x1+1; x < this.x2-1; x++) {
                callback(x, y);
            }
        }
    }
}

export {
    generateDungeon
}
