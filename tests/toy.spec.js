import Toy from '../src/models/Toy';
// jest.mock('../src/models/Toy');
let toy;

beforeEach(() => {
  toy = new Toy(0, 0, '');
});

describe('toy robot basic behaviour tests', () => {
  it('should instantiate when a toy instance is created', () => {
    
    expect(toy).toEqual({
      "face" : '',
      "xPos" : 0,
      "yPos" : 0,
    });
  });

  it('should place the toy robot for the given coordinates and direction', () => {
    
    toy.place(1,2,"SOUTH");
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 1,
      "yPos" : 2,
    });
  });

  it('should change the direction when toy robot is turned left', () => {
    toy.place(1,2,"SOUTH");
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 1,
      "yPos" : 2,
    });
    toy.turnLeft();
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 1,
      "yPos" : 2,
    });
  });

  it('should change the direction when toy robot is turned right', () => {
    toy.place(1,2,"EAST");
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 1,
      "yPos" : 2,
    });
    toy.turnRight();
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 1,
      "yPos" : 2,
    });
  });

  it('should move the toy robot by 1 space in the specified direction', () => {
    toy.place(3,2,"WEST");
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 3,
      "yPos" : 2,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnRight();
    toy.move();
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 3,
    });
  });


  it('should report the toy robots current position', () => {

    toy.place(1,2,"EAST");
    console.log = jest.fn();

    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 1,
      "yPos" : 2,
    });
    toy.reportPosition();
    expect(console.log.mock.calls[0][0]).toBe("1,2,EAST")

  });

});

describe('toy robot turn left logic tests', () => {

  it('should face WEST if intially was facing NORTH', () => {
    toy.place(2,2,"NORTH");
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnLeft();
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face SOUTH if intially was facing WEST', () => {
    toy.place(2,2,"WEST");
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnLeft();
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face EAST if intially was facing SOUTH', () => {
    toy.place(2,2,"SOUTH");
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnLeft();
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face NORTH if intially was facing EAST', () => {
    toy.place(2,2,"EAST");
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnLeft();
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 2,
    });
  });



});

describe('toy robot turn right logic tests', () => {

  it('should face EAST if intially was facing NORTH', () => {
    toy.place(2,2,"NORTH");
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnRight();
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face SOUTH if intially was facing EAST', () => {
    toy.place(2,2,"EAST");
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnRight();
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face WEST if intially was facing SOUTH', () => {
    toy.place(2,2,"SOUTH");
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnRight();
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
  });

  it('should face NORTH if intially was facing WEST', () => {
    toy.place(2,2,"WEST");
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.turnRight();
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 2,
    });
  });



});

describe('toy robot move logic tests', () => {

  it('should vertically move upward if toy is facing NORTH', () => {
    toy.place(2,2,"NORTH");
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : 'NORTH',
      "xPos" : 2,
      "yPos" : 3,
    });
  });

  it('should vertically move downward if toy is facing SOUTH', () => {
    toy.place(2,2,"SOUTH");
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : 'SOUTH',
      "xPos" : 2,
      "yPos" : 1,
    });
  });

  it('should horizontally move forward if toy is facing EAST', () => {
    toy.place(2,2,"EAST");
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : 'EAST',
      "xPos" : 3,
      "yPos" : 2,
    });
  });

  it('should horizontally move backward if toy is facing WEST', () => {
    toy.place(2,2,"WEST");
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 2,
      "yPos" : 2,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : 'WEST',
      "xPos" : 1,
      "yPos" : 2,
    });
  });

  it('should not move if toy is not placed', () => {
    expect(toy).toEqual({
      "face" : '',
      "xPos" : 0,
      "yPos" : 0,
    });
    toy.move();
    expect(toy).toEqual({
      "face" : '',
      "xPos" : 0,
      "yPos" : 0,
    });
  });


  

});
