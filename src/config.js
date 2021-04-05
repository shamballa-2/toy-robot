import constants from './constants';

const { directions } = constants;
const {
  NORTH, SOUTH, WEST, EAST,
} = directions;

export default {
  leftMapping: {
    [NORTH]: WEST,
    [WEST]: SOUTH,
    [SOUTH]: EAST,
    [EAST]: NORTH,
  },
  rightMapping: {
    [NORTH]: EAST,
    [EAST]: SOUTH,
    [SOUTH]: WEST,
    [WEST]: NORTH,
  },

};
