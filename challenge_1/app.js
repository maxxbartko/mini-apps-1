// TIC TAC TOE the first move always starts with player X restart alternator on
// new game the app detects a win or tie and displays an appropriate message if
// win, etc. a button resets the game for a new round of gameplay button that
// resets DOM event listener document.addEventListener('click', function () {
// document.getElementsByTagName('td')         .text = 'X'; });

let mark = 'X';
let moves = 0;
let dim = 3; // make alterable

let wonLastX = false;
let victoryX = false;
let victoryO = false;

let board = [];
let movesX = [];
let movesO = [];
let majDiag = [];
let minDiag = [];

let space,
  x,
  y,
  winsX,
  WinsO,
  ties;

const newGame = () => {
  wonLastX
    ? mark = 'O'
    : mark = 'X';
  moves = 0;
  dim = 3; // make alterable
  board = [];

  renderBoard();
}

const renderBoard = () => {
  mark = 'X';
  moves = 0;

  for (var x = 0; x < dim; x++) {
    // make model row arrays
    board.push([]);
    for (var y = 0; y < dim; y++) {
      // populate model rows
      board[x].push([false, false]); // [is X present, is O present]

      // build diag arrays view build dim x dim HTML table, undo hard coding set click
      // handlers
      let space = document.getElementById(`${x},${y}`);
      space.addEventListener('click', moveHandler, false);
      // create text nodes
      let text = document.createTextNode('');
      space.appendChild(text);
    }
  }
};

const moveHandler = (e) => {
  space = e.currentTarget;
  [x, y] = space
    .id
    .split(',');

  if (board[x][y].includes(null)) {
    // alert: can't go here
    alert('Space already occupied');
  } else {
    moveModel(x, y);
    moveView(space);
  }

  if (moves > dim * 2 - 2) 
    checkWin();
  
  moves++;
};

const moveModel = (x, y) => {
  // check if space previously occupied
  if (mark === 'X') {
    board[x][y] = [true, null];
    movesX.push([x, y]);
  } else {
    board[x][y] = [null, true];
    movesO.push([x, y]);
  }
}

const moveView = (space) => {
  if (space.textContent === '') {
    space.textContent = mark;
    mark === 'X'
      ? mark = 'O'
      : mark = 'X';
  }
}

const checkWin = () => {
  // make sub-helper out of win check

  if (checkPlayer('X')) 
    !breakout;
  else if (checkPlayer('O')) {
    !breakout;
  }

  if (breakout) {
    // if somebody won
  } else {
    if (moves === dim ** 2) {
      // alert tie, since other outcomes come before this play again dialog y/n
      !breakout;
    }
    console.log('no one yet');
  }
}
// if dim is odd, check midpoint for ez diag check vertical check build major
// diag array major diag check build minor diag array minor diag check who won?
// if x wins, tick up x win count and set xWonLast to true if o wins, tick up o
// win count and set xWonLast to false

newGame();
// get whiteboard look at hints, adv content, etc to think through structure

const checkPlayer = (player) => {
  // set player-relevant variables: which list of moves, and which datum in each
  // board square
  let moves, z;

  if (player === 'X') {
    moves = movesX;
    z = 0;
  } else {
    moves = movesO;
    z = 1;
  }

  let xCount = 0;
  let yCount = 0;

  // check columns and rows that player already moved into search rows
  for (var x = 0; x < dim && !breakout; x++) {
    for (var y = 0; y < dim && !breakout; y++) {
      // if X played in this row in this column, tick count up
      if (board[x][y][z]) {
        xCount++;
        yCount++;
      }
      // victory check
      if (xCount === dim || yCount === dim) {
        !breakout;
        alert(`${player} wins!`);
        return true;
      };
    }
  }

  return false; // no win this round
}

// check majDiag check minDiag