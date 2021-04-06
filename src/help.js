// usage represents the help guide
export function showHelp() {
  const usageText = `
    This is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
    Note: The first valid command to the robot should be a PLACE command
    
    Commands:

      PLACE X,Y,F : puts the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
      MOVE        : moves the toy one unit forward in the direction it is currently facing
      LEFT/RIGHT  : rotates the robot 90 degrees in the specified direction
      REPORT      : announce the X,Y and F of the robot
      EXIT        : exits the program
  `;

  console.log(usageText)
}
  