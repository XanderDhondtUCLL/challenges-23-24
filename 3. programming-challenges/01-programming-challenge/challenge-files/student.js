// Write your code here
// Write your code here
function myFirstFunction(bike) {
  forward(bike);
}
function twiceForward(bike) {
  forward(bike);
  forward(bike);
}

function thriceForward(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
}
function forward4(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
  forward(bike);
}
function forward5(bike) {
  i = 5;
  while (i > 0) {
    forward(bike);
    i -= 1;
  }
}
function forward10(bike) {
  i = 10;
  while (i > 0) {
    forward(bike);
    i -= 1;
  }
}

function right(bike) {
  turnRight(bike);
  forward(bike);
}

function ellShape(bike) {
  forward5(bike);
  turnRight(bike);
  forward4(bike);
}

function uTurn(bike) {
  thriceForward(bike);
  turnRight(bike);
  forward10(bike);
  turnRight(bike);
  twiceForward(bike);
}
function forwardN(bike, steps) {
  let i = steps;

  while (i > 0) {
    forward(bike);
    i = i - 1;
  }
}

function crookedUTurn(bike) {
  forwardN(bike, 7);
  turnRight(bike);
  forwardN(bike, 9);
  turnRight(bike);
  forwardN(bike, 3);
}

function forwardUntilWall(bike) {
  while (!sensor(bike)) {
    forward(bike);
  }
}
function smartEllShape(bike) {
  while (!sensor(bike)) {
    forward(bike);
  }
  turnRight(bike);
  while (!sensor(bike)) {
    forward(bike);
  }
}

function spiral(car) {
  while (!sensor(car)) {
    forwardUntilWall(car);
    turnRight(car);
  }
}

function turnLeft(car) {
  turnRight(car);
  turnRight(car);
  turnRight(car);
}

function left(car) {
  turnLeft(car);
  forward(car);
}
function slalom(car) {
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}
function leftOrRight(car) {
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
}
function incompleteU(car) {
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}

function whichDirection(car) {
  while (sensor(car)) {
    turnLeft(car);
  }
  forwardUntilWall(car);
}
function sensorRight(car) {
  turnRight(car);
  let result = sensor(car);
  turnLeft(car);

  return result;
}
function firstRight(car) {
  while (sensorRight(car)) {
    forward(car);
  }
  turnRight(car);
  forwardUntilWall(car);
}
function sensorLeft(car) {
  turnLeft(car);
  let result = sensor(car);
  turnRight(car);

  return result;
}
function firstLeft(car) {
  while (sensorLeft(car)) {
    forward(car);
  }
  turnLeft(car);
  forwardUntilWall(car);
}
function zigZag(car) {
  firstRight(car);
  turnLeft(car);
  forward(car);
  firstLeft(car);
}
function forwardUntilFreeRight(car) {
  while (sensorRight(car)) {
    forward(car);
  }
}

function secondRight(car) {
  forwardUntilFreeRight(car);
  forward(car);
  forwardUntilFreeRight(car);
  turnRight(car);
  forwardUntilWall(car);
}
function thirdRight(car) {
  forwardUntilFreeRight(car);
  forward(car);
  forwardUntilFreeRight(car);
  forward(car);
  forwardUntilFreeRight(car);
  turnRight(car);
  forwardUntilWall(car);
}
function forwardUntilNthRight(car, n) {
  let i = n;

  while (i > 0) {
    forward(car);

    if (!sensorRight(car)) {
      i = i - 1;
    }
  }
}
function forwardUntilNthLeft(car, n) {
  let i = n;

  while (i > 0) {
    forward(car);

    if (!sensorLeft(car)) {
      i = i - 1;
    }
  }
}
function fourthRight(car) {
  forwardUntilNthRight(car, 4);
  turnRight(car);
  forwardUntilWall(car);
}
function fifthLeft(car) {
  forwardUntilNthLeft(car, 5);
  turnLeft(car);
  forwardUntilWall(car);
}
function maze(car) {
  function L(N) {
    forwardUntilNthLeft(car, N);
    turnLeft(car);
  }
  function R(N) {
    forwardUntilNthRight(car, N);
    turnRight(car);
  }
  R(2);
  L(1);
  L(2);
  L(2);
  R(4);
  R(1);
  L(3);
  forwardUntilWall(car);
}
function isDeadEnd(car) {
  if (!sensor(car)) {
    return false;
  }
  if (!sensorRight(car)) {
    return false;
  }
  if (!sensorLeft(car)) {
    return false;
  }
  return true;
}

function turnAround(car) {
  turnRight(car);
  turnRight(car);
}

function backward(car) {
  turnAround(car);
  forward(car);
  turnAround(car);
}
function findDeadEnd(car) {
  while (true) {
    forward(car);
    if (isDeadEnd(car)) {
      return;
    }

    backward(car);
    turnRight(car);
  }
}

function follow(car) {
  function EmptyRoad() {
    if (isDeadEnd(car)) {
      return false;
    }
    return true;
  }
  while (EmptyRoad()) {
    if (!sensor(car)) {
      forward(car);
    } else if (!sensorRight(car)) {
      turnRight(car);
      forward(car);
    } else {
      turnLeft(car);
      forward(car);
    }
  }
}

//onderstaande code werkt niet
function rightHand(car) {
  if (sensor(car)) {
    if (sensorLeft(car)) {
      turnRight(car);
    }
    if (sensorRight(car)) {
      turnLeft(car);
    }
  } else {
    while (sensorRight(car)) {
      forward(car);
    }
  }
}
