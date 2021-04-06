import promptSync from 'prompt-sync';
import Toy from './models/Toy';
import { showHelp } from './help';

import {
  validXDimension, validYDimension, validDirection, validateMove, validPlaceCommand, validToyPlacement
} from './validations';

import constants from './constants';
const { validCommands } = constants;

const prompt = promptSync({ sigint: true });

// Creates a Toy instance
const toy = new Toy(0, 0, '');

// This variable is used to determine if the app should continue prompting the user for input
const continueProgram = false;
let isToyPlaced = false;

// Shows Help guide for commands
showHelp();

while (!continueProgram) {
  // Get user input
  const command = prompt('Please enter a command for the toy robot:');
  const commandArgs = command.split(' ');
  try {
    //  Validates whether a toy is placed before accepting other commands
    if(validCommands.includes(commandArgs[0]) && commandArgs[0] !== 'PLACE')
      isToyPlaced = validToyPlacement(toy.face);

    // Handle toy operations based on input commands
    switch (commandArgs[0]) {
      case 'PLACE': {
        const placeArgs = validPlaceCommand(commandArgs[1]); 
        const xPos = validXDimension(placeArgs[0]);
        const yPos = validYDimension(placeArgs[1]);
        const face = validDirection(placeArgs[2]);
        toy.place(xPos, yPos, face);
        isToyPlaced = true;
        break;
      }
      case isToyPlaced && 'MOVE':
        validateMove(toy.face, toy.xPos, toy.yPos);
        toy.move();
        break;
      case isToyPlaced && 'LEFT':
        toy.turnLeft();
        break;
      case isToyPlaced && 'RIGHT':
        toy.turnRight();
        break;
      case isToyPlaced && 'REPORT':
        toy.reportPosition();
        break;
      default:
        console.log('INVALID COMMAND');
        break;
    }
  } catch (error) {
    console.error('MOVE IGNORED:', error.message);
  }
}
