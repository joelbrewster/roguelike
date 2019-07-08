/*jshint esversion: 6 */

import Tiles from './tiles'
import rung from 'rung/src/rung'

const defaultConfig = {
  maxRoomCount: 30,
  minRoomSize: 6,
  maxRoomSize: 12,
}

function generateDungeon(width, height, configuration) {
  const config = {...defaultConfig, ...configuration}
  const tiles = []

  for (let y = 0; y < height; y++) {
    tiles[y] = []
    for (let x = 0; x < width; x++) {
      tiles[y][x] = Tiles.WALL
    }
  }

  const rng = rung()

  const room = Rect(width / 2 - 10, height / 2 - 10, 30, 20)

  room.forEach((x, y) => (tiles[y][x] = Tiles.FLOOR))

  const rooms = []

  for (let r of Array(config.maxRoomCount).keys()) {
    let w = rng.integer(config.minRoomSize, config.maxRoomSize)
    let h = rng.integer(config.minRoomSize, config.maxRoomSize)
    let x = rng.integer(1, width - w - 1)
    let y = rng.integer(1, width - h - 1)

    rooms[r] = new Rect(x, y, w, h)
  }

  for (let room of rooms) {
    room.forEach((x, y) => (tiles[y][x] = Tiles.FLOOR))
  }

  return tiles
}

class Rect {
  constructor(x, y, width, height) {
    this.x1 = x
    this.y1 = y
    this.x2 = x + width
    this.y2 = y + height
  }

  intersects(rect) {
    return (
      this.x1 <= rect.x2 &&
      this.x2 >= rect.x1 &&
      this.yz <= rect.y2 &&
      this.y2 >= rect.y1
    )
  }

  forEach(callback) {
    for (let y = this.y1 + 1; y < this.y2 - 1; y++) {
      for (let x = this.x1 + 1; x < this.x2 - 1; x++) {
        callback(x, y)
      }
    }
  }
}

export {generateDungeon}
