import promptSync from 'prompt-sync';
import Toy from './models/Toy';
import {
  validXDimension, validYDimension, validDirection, validateMove,
} from './validations';


const prompt = promptSync({ sigint: true });

const toy = new Toy(0, 0, '');

// This variable is used to determine if the app should continue prompting the user for input
const continueProgram = false;

while (!continueProgram) {
  // Get user input
  const command = prompt('Please enter a command for the toy robot:');
  const commandArgs = command.split(' ');
  // Handle toy operations based on input commands
  switch (commandArgs[0]) {
    case 'PLACE': {
      const placeArgs = commandArgs[1].split(',');
      const xPos = validXDimension(placeArgs[0]);
      const yPos = validYDimension(placeArgs[1]);
      const face = validDirection(placeArgs[2]);
      toy.place(xPos, yPos, face);
      break;
    }
    case 'MOVE':
      validateMove(toy.face, toy.xPos, toy.yPos);
      toy.move();
      break;
    case 'LEFT':
      toy.turnLeft();
      break;
    case 'RIGHT':
      toy.turnRight();
      break;
    case 'REPORT':
      toy.reportPosition();
      break;
    default:
      console.log('INVALID COMMAND');
      break;
  }
}
