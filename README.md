# Toy Robot Challenge

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.


## Requirements

For development, you will only need Node.js and a [Node Global Package Manager (NPM)](https://docs.npmjs.com/) installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

---

## Install

    $ git clone https://github.com/shamballa-2/toy-robot.git
    $ cd toy-robot
    $ npm install
    $ npm start
---

## Run Output Binaries

There are three different binary/executable files created for targeted environments which can be run in the follwoing way:

    $ git clone https://github.com/shamballa-2/toy-robot.git
    $ cd toy-robot
    $ cd output-binaries
    
    Run in Windows by double clicking:
    $ toy-robot-win.exe
    
    Run in OSX using following command:(may need to make the binary executable by chmod a+x)
    $ ./toy-robot-macos

    Run in Linux using following command:(may need to make the binary executable by chmod a+x)
    $ ./toy-robot-linux

---

### Commands

| Command	 Name| Usage | Example |
|:--|:--|:--|
| `PLACE X,Y,F` | Puts the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. | `PLACE 1,2,EAST` |
| `LEFT` | Rotates the robot 90 degrees in the specified direction. | `LEFT` |
| `RIGHT` | Rotates the robot 90 degrees in the specified direction. | `RIGHT` |
| `MOVE` | Moves the toy one unit forward in the direction it is currently facing. | `MOVE` |
| `REPORT` | Announces the X,Y and F of the robot. | `REPORT` |
| `EXIT` | Exits the program. | `EXIT` |

    
---

## Run Tests
Use the following command to run all the tests in the `/tests` folder and for running single test add file name to be tested ahead of the command.

    $ npm test
    $ npm test <file_to_test>.spec.js
    

