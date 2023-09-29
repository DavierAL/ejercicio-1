import Map from './map.js'
import Player from './player.js'

export default class Game {
  constructor() {
    this.map = new Map()
    this.player = new Player()

    setInterval(() => {
      this.draw()
    }, 33)
  }

  draw() {
    this.map.draw()
    this.player.draw()
  }
}
