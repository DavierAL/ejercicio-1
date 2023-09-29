import ui from './ui.js';
import Map from './map.js';

export default class Player {
  constructor() {
    this.x = 2;
    this.y = 2;
    this.skin = 'P';
    this.map = new Map; // mapa

    ui.screen.on('keypress', (char, key) => {
      const prevX = this.x;
      const prevY = this.y;

      if (key.name === 'left') {
        this.x--;
      }

      if (key.name === 'right') {
        this.x++;
      }

      if (key.name === 'up') {
        this.y--;
      }

      if (key.name === 'down') {
        this.y++;
      }


      if (this.map.tiles[this.y][this.x] === 1) {
        this.x = prevX;
        this.y = prevY;
      }
    });
  }

  draw() {
    ui.printCharacter(this.x, this.y, this.skin);
  }
}
