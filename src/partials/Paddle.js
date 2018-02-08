import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, color, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.color = color;
    this.up = up;
    this.down = down;


  }
  //...
  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributesNS(null, 'fill', 'white');
    rect.setAttributesNS(null, 'width', this.width);
    rect.setAttributesNS(null, 'height', this.height);
    rect.setAttributesNS(null, 'x', this.x);
    rect.setAttributesNS(null, 'y', this.y);

    svg.appendChild(rect);
  }
}