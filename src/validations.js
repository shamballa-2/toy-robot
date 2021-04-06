import constants from './constants';

const { dimensions, directions, validationMessages } = constants;
const {
  NORTH, SOUTH, WEST, EAST,
} = directions;
const {
  X_MAX, X_MIN, Y_MAX, Y_MIN,
} = dimensions;
const {
  X_NOT_NUMBER, Y_NOT_NUMBER, X_LIMIT, Y_LIMIT, INVALID_DIRECTION, INVALID_PLACEMENT, INVALID_PLACE_COMMAND, INVALID_PLACE_PARAMS
} = validationMessages;

// validates the horizontal position value
export function validXDimension(value) {
  if (isNaN(value)) {
    throw new Error(X_NOT_NUMBER);
  } else if (value < X_MIN || value >= X_MAX) {
    throw new Error(X_LIMIT);
  }
  return Number(value);
}

// validates the vertical position value
export function validYDimension(value) {
  if (isNaN(value)) {
    throw new Error(Y_NOT_NUMBER);
  } else if (value < Y_MIN || value >= Y_MAX) {
    throw new Error(Y_LIMIT);
  }
  return Number(value);
}

// validates the input direction
export function validDirection(value) {
  if (![NORTH, SOUTH, WEST, EAST].includes(value)) {
    throw new Error(INVALID_DIRECTION);
  }
  return value;
}

// validates whether a valid place command is used
export function validPlaceCommand(args) {
  if (!args) {
    throw new Error(INVALID_PLACE_COMMAND);
  } else {
    let placeArgs = args.split(',');
    if (placeArgs.length !== 3) {
      throw new Error(INVALID_PLACE_PARAMS);
    }
    return placeArgs;
  }
}

// validates whether the toy is placed based on its face value
export function validToyPlacement(face) {
  if (face === '') {
    throw new Error(INVALID_PLACEMENT);
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
      throw new Error(INVALID_DIRECTION);
  }
  return true;
}
