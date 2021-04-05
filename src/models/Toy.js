/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import config from '../config';
import constants from '../constants';

const { leftMapping, rightMapping } = config;
const { directions } = constants;
const {
  NORTH, SOUTH, EAST, WEST,
} = directions;

class Toy {
  // init toy properties
  constructor(xPos, yPos, face) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.face = face;
  }

  // placing logic
  place(xPos, yPos, face) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.face = face;
  }

  // move logic
  move() {
    switch (this.face) {
      case NORTH:
        this.yPos += 1;
        break;
      case SOUTH:
        this.yPos -= 1;
        break;
      case EAST:
        this.xPos += 1;
        break;
      case WEST:
        this.xPos -= 1;
        break;
      default: break;
    } 
  }

  // left logic
  turnLeft() {
    this.face = leftMapping[this.face];
  }

  // right logic
  turnRight() {
    this.face = rightMapping[this.face];
  }

  // report position logic
  reportPosition() {
    const reportData = [this.xPos, this.yPos, this.face];
    console.log(reportData.join(','));
  }
}

export default Toy;
