// TIC TAC TOE the first move always starts with player X restart alternator on
// new game the app detects a win or tie and displays an appropriate message if
// win, etc. a button resets the game for a new round of gameplay button that
// resets DOM event listener document.addEventListener('click', function () {
// document.getElementsByTagName('td')         .text = 'X'; });
let button = document.getElementsByTagName('button');
button.addEventListener('click', buttonHandler);

let mark = 'X';
let moves = 0;

let wonLastX = false;
let victoryX = false;
let victoryO = false;

let board = [];

let space,
  x,
  y,
  winsX,
  winsO,
  ties;

const newGame = () => {
  wonLastX ? mark = 'O' : mark = 'X';
  moves = 0;
  board = [];

  renderBoard();
}

const renderBoard = () => {
  for (var x = 0; x < 3; x++) {
    // make model row arrays
    board.push([]);

    for (var y = 0; y < 3; y++) {
      // populate model rows
      board[x].push([false, false]); // [is X present, is O present]

      // view
      let space = document.getElementById(`${x},${y}`);
      space.addEventListener('click', moveHandler);

      // create text nodes
      let text = document.createTextNode('');
      space.appendChild(text);
    }
  }
};

const buttonHandler = (e) => {
  
}

const moveHandler = (e) => {
  space = e.currentTarget;
  [x, y] = space.id.split(',');

  if (board[x][y].includes(null)) {
    alert('Space already occupied');
  } else {
    moveModel(x, y);
    moveView(space);
  }

  moves++;
  if (moves > 4) { checkWin(); }
};

const moveModel = (x, y) => {
board[x][y] = mark === 'X'
  ? [true, null]
  : [null, true];
}

const moveView = (space) => {
  space.textContent = mark;
  mark === 'X'
    ? mark = 'O'
    : mark = 'X';
}

const checkPlayer = (player) => {
  let z = player === 'X' ? 0 : 1; // check for Xs or Os
  let xCount = {};
  let yCount = {};

  // check columns and rows that player already moved into search rows
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      // if X played in this row in this column, tick count up
      if (board[x][y][z]) {
        xCount[x] === undefined ? xCount[x] = 1 : xCount[x]++;
        yCount[y] === undefined ? yCount[y] = 1 : yCount[y]++;
      }
    }
  }
  // victory check
  if (Object.values(xCount).includes(3) || Object.values(yCount).includes(3)) {
    return true;
  }

    // diagonals
    if (board[1][1][z]) {
      if (board[0][0][z] && board[2][2][z]) {
        return true;
      } else if (board[2][0][z] && board[0][2][z]) {
        return true;
      }
    }
  
  
  return false; // no win this round
}

const checkWin = () => {
  victoryX = checkPlayer('X');
  victoryO = checkPlayer('O');

  if (victoryX) {
    setTimeout(() => alert('X WINS'), 10);
  } else if (victoryO) {
    setTimeout(() => alert('O WINS'), 10);
  } else {
    if (moves === 9) {
      // alert tie, since other outcomes come before this play again dialog y/n
      !breakout;
    }
    console.log('no one yet');
  }
}
// if 3 is odd, check midpoint for ez diag check vertical check build major
// diag array major diag check build minor diag array minor diag check who won?
// if x wins, tick up x win count and set xWonLast to true if o wins, tick up o
// win count and set xWonLast to false


// get whiteboard look at hints, adv content, etc to think through structure

newGame();