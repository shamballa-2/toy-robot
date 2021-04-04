import promptSync from 'prompt-sync';
import Toy from './models/Toy';

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
      const xPos = (placeArgs[0]);
      const yPos = (placeArgs[1]);
      const face = (placeArgs[2]);
      toy.place(xPos, yPos, face);
      break;
    }
    case 'MOVE':
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