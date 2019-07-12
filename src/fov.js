const octantTransforms = [
  {xx: 1, xy: 0, yx: 0, yy: 1},
  {xx: 1, xy: 0, yx: 0, yy: -1},
  {xx: -1, xy: 0, yx: 0, yy: 1},
  {xx: -1, xy: 0, yx: 0, yy: -1},
  {xx: 0, xy: 1, yx: 1, yy: 0},
  {xx: 0, xy: 1, yx: -1, yy: 0},
  {xx: 0, xy: -1, yx: 1, yy: 0},
  {xx: 0, xy: -1, yx: -1, yy: 0},
]

function createFOV(width, height, reveal, isOpaque) {
  function castShadows(originX, originY, row, start, end, transform, radius) {
    let newStart = 0
    if (start < end) return

    let blocked = false

    for (let distance = row; distance < radios && !blocked; distance++) {
      let deltaY = -distance
      for (let deltaX = -distance; deltaX <= 0; deltaX++) {}
    }
  }
}
