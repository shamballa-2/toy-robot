import {
    validXDimension, validYDimension, validDirection, validateMove, validToyPlacement, validPlaceCommand
  } from '../src/validations';
  


  describe('position validation tests', () => {

    it('should not allow non-numeric x value', () => {

        expect(validXDimension(2)).toBe(2);
        expect(validXDimension(4)).toBe(4);
        expect(() => { validXDimension('asd') }).toThrow('X VALUE SHOULD BE A NUMBER');
    });

    it('should not allow non-numeric y value', () => {
        
        expect(validYDimension(2)).toBe(2);
        expect(validYDimension(4)).toBe(4);
        expect(() => { validYDimension('asd') }).toThrow('Y VALUE SHOULD BE A NUMBER');
    });


    it('should not allow value greater than x max limit', () => {

        expect(validXDimension(2)).toBe(2);
        expect(validXDimension(4)).toBe(4);
        expect(() => { validXDimension(10) }).toThrow('X MAXED OUT');
    });

    it('should not allow value lesser than x min limit', () => {

        expect(validXDimension(2)).toBe(2);
        expect(validXDimension(4)).toBe(4);
        expect(() => { validXDimension(-14) }).toThrow('X MAXED OUT');

    });

    it('should not allow value greater than y max limit', () => {

        expect(validYDimension(2)).toBe(2);
        expect(validYDimension(4)).toBe(4);
        expect(() => { validYDimension(10)}).toThrow("Y MAXED OUT");

    });

    it('should not allow value lesser than y min limit', () => {

        expect(validYDimension(2)).toBe(2);
        expect(validYDimension(4)).toBe(4);
        expect(() => { validYDimension(-6)}).toThrow('Y MAXED OUT');

    });

  });

  describe('direction validation tests', () => {

    it('accepts defined set of direction values', () => {

        expect(validDirection("NORTH")).toBe("NORTH");
        expect(validDirection("SOUTH")).toBe("SOUTH");
        expect(validDirection("EAST")).toBe("EAST");
        expect(validDirection("WEST")).toBe("WEST");
    });

    it('ignores invalid direction values ', () => {

        expect(() => validDirection("N")).toThrow("INVALID DIRECTION VALUE");
        expect(() => validDirection("north")).toThrow("INVALID DIRECTION VALUE");
        expect(() => validDirection("north-west")).toThrow("INVALID DIRECTION VALUE");
        expect(() => validDirection("NW")).toThrow("INVALID DIRECTION VALUE");

    });

  });

  describe('toy move logic validation tests', () => {

    it('accepts valid moves for NORTH facing toy robot', () => {

        expect(validateMove("NORTH", 1, 0)).toBeTruthy();
        expect(validateMove("NORTH", 2, 1)).toBeTruthy();
        expect(validateMove("NORTH", 3, 2)).toBeTruthy();
        expect(validateMove("NORTH", 4, 3)).toBeTruthy();
    });

    it('rejects invalid move for NORTH facing toy robot', () => {

        expect(() => validateMove("NORTH", 1, 4)).toThrow('Y MAXED OUT');
        expect(() => validateMove("NORTH", 0, 4)).toThrow('Y MAXED OUT');
        expect(() => validateMove("NORTH", 1, 5)).toThrow('Y MAXED OUT');
        expect(() => validateMove("NORTH", 4, 6)).toThrow('Y MAXED OUT');
    });


    it('accepts valid moves for SOUTH facing toy robot', () => {

        expect(validateMove("SOUTH", 1, 1)).toBeTruthy();
        expect(validateMove("SOUTH", 1, 2)).toBeTruthy();
        expect(validateMove("SOUTH", 1, 3)).toBeTruthy();
        expect(validateMove("SOUTH", 1, 4)).toBeTruthy();
    });

    it('rejects invalid moves for SOUTH facing toy robot', () => {

        expect(() => validateMove("SOUTH", 1, 0)).toThrow('Y MAXED OUT');
        expect(() => validateMove("SOUTH", 3, 0)).toThrow('Y MAXED OUT');
        expect(() => validateMove("SOUTH", 1, -1)).toThrow('Y MAXED OUT');
        expect(() => validateMove("SOUTH", 4, -3)).toThrow('Y MAXED OUT');

    });

    it('accepts valid moves for EAST facing toy robot', () => {

        expect(validateMove("EAST", 0, 1)).toBeTruthy();
        expect(validateMove("EAST", 1, 2)).toBeTruthy();
        expect(validateMove("EAST", 2, 3)).toBeTruthy();
        expect(validateMove("EAST", 3, 4)).toBeTruthy();
    });

    it('rejects invalid moves for EAST facing toy robot', () => {

        expect(() => validateMove("EAST", 4, 0)).toThrow('X MAXED OUT');
        expect(() => validateMove("EAST", 4, 1)).toThrow('X MAXED OUT');
        expect(() => validateMove("EAST", 5, 0)).toThrow('X MAXED OUT');
        expect(() => validateMove("EAST", 6, 0)).toThrow('X MAXED OUT');

    });


    it('accepts valid moves for WEST facing toy robot', () => {

        expect(validateMove("WEST", 1, 1)).toBeTruthy();
        expect(validateMove("WEST", 2, 2)).toBeTruthy();
        expect(validateMove("WEST", 3, 3)).toBeTruthy();
        expect(validateMove("WEST", 4, 4)).toBeTruthy();
    });

    it('rejects invalid moves for WEST facing toy robot', () => {

        expect(() => validateMove("WEST", 0, 0)).toThrow('X MAXED OUT');
        expect(() => validateMove("WEST", 0, 4)).toThrow('X MAXED OUT');
        expect(() => validateMove("WEST", -1, 0)).toThrow('X MAXED OUT');
        expect(() => validateMove("WEST", -3, 0)).toThrow('X MAXED OUT');

    });

    it('ignores move for invalid specified direction', () => {

        expect(() => validateMove("W", 0, 0)).toThrow('INVALID DIRECTION VALUE');
        expect(() => validateMove("NW", 0, 1)).toThrow('INVALID DIRECTION VALUE');
        expect(() => validateMove("n", 1, 3)).toThrow('INVALID DIRECTION VALUE');
        expect(() => validateMove("North", 3, 0)).toThrow('INVALID DIRECTION VALUE');

    });


  });

  describe('toy placement logic validation tests', () => {

    it('checks if toy is placed if toy is facing in a direction', () => {
        expect(validToyPlacement("NORTH")).toBeTruthy();
        expect(validToyPlacement("SOUTH")).toBeTruthy();
        expect(validToyPlacement("EAST")).toBeTruthy();
        expect(validToyPlacement("WEST")).toBeTruthy();
    });

    it('ignores if toy is not facing in a direction', () => {
        expect(() => validToyPlacement("")).toThrow('TOY NEEDS TO BE PLACED FIRST');
    });

    it('ignores if place command has no parmaters and shows message', () => {
        expect(() => validPlaceCommand("")).toThrow('PLACE CMD NEEDS PARAMETERS');
        expect(() => validPlaceCommand(undefined)).toThrow('PLACE CMD NEEDS PARAMETERS');
    });

    it('ignores if place command fails to provide 3 parameters and shows message', () => {
        expect(() => validPlaceCommand("2")).toThrow('PLACE CMD NEEDS 3 PARAMETERS: X,Y,F');
        expect(() => validPlaceCommand("2,NORTH,2,3")).toThrow('PLACE CMD NEEDS 3 PARAMETERS: X,Y,F');
        expect(() => validPlaceCommand(",,,")).toThrow('PLACE CMD NEEDS 3 PARAMETERS: X,Y,F');

    });

    it('accepts if place command provides 3 parameters in correct order', () => {
        expect(validPlaceCommand("2,4,SOUTH")).toEqual(["2","4","SOUTH"]);
        expect(validPlaceCommand("0,2,EAST")).toEqual(["0","2","EAST"]);
    });


  });