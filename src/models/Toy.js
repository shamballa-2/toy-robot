/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
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
    console.log('turn left');
  }

  // right logic
  turnRight() {
    console.log('turn right');
  }

  // report position logic
  reportPosition() {
    console.log('report position');
  }
}

export default Toy;
