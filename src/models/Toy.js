/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import config from '../config';
const { leftMapping, rightMapping } = config;

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
    console.log('move logic');
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
