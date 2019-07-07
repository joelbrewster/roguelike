/*jshint esversion: 6 */

import Tiles from './tiles';

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

export {
  generateDungeon
}
