import constants from './constants';

const { dimensions, directions } = constants;
const {
  NORTH, SOUTH, WEST, EAST,
} = directions;
const {
  X_MAX, X_MIN, Y_MAX, Y_MIN,
} = dimensions;

// validates the horizontal position value
export function validXDimension(value) {
  if (value < X_MIN || value >= X_MAX) {
    throw new Error('X MAXED OUT');
  }
  return Number(value);
}

// validates the vertical position value
export function validYDimension(value) {
  if (value < Y_MIN || value >= Y_MAX) {
    throw new Error('Y MAXED OUT');
  }
  return Number(value);
}

// validates the input direction
export function validDirection(value) {
  if (![NORTH, SOUTH, WEST, EAST].includes(value)) {
    throw new Error('INVALID DIRECTION VALUE');
  }
  return value;
}

// validates whether the toy is placed based on its face value
export function validToyPlacement(face) {
  if (face === '') {
    throw new Error('TOY NEEDS TO BE PLACED FIRST');
  }
  return true;
}

// validates move based on the toys current position and direction 
export function validateMove(face, xPos, yPos) {
  switch (face) {
    case NORTH:
      validYDimension(yPos + 1);
      break;
    case SOUTH:
      validYDimension(yPos - 1);
      break;
    case EAST:
      validXDimension(xPos + 1);
      break;
    case WEST:
      validXDimension(xPos - 1);
      break;
    default:
      throw new Error('INVALID DIRECTION VALUE');
  }
  return true;
}
