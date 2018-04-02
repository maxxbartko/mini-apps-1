// TIC TAC TOE

// the first move always starts with player X
// restart alternator on new game

// the app detects a win or tie and displays an appropriate message
// if win, etc.

// a button resets the game for a new round of gameplay
// button that resets DOM

// event listener
// document.addEventListener('click', function () {
//     document.getElementsByTagName('td')
//         .text = 'X';
// });

let mark = 'X';
let moves = 0;
let dim = 3; // make alterable
let board = [];
let space, x, y, xWins, oWins, ties;
let xWonLast = false;

const newGame = () => {
  xWonLast ? mark = 'O' : mark = 'X';
  moves = 0;
  dim = 3; // make alterable
  board = [];
  space; // does this actually clear variable?
  x,
  y;

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

      // view
      // build dim x dim HTML table, undo hard coding

      // set click handlers
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
  [x, y] = space.id.split(',');

  if (board[x][y].includes(null)) {
    // alert: can't go here
    alert('Space already occupied');
  } else {
    moveModel();
    moveView();
  }

  if (moves > dim * 2 - 2) checkWin();

  moves++;
};

const moveModel = () => {
  // check if space previously occupied
  mark === 'X'
    ? board[x][y] = [true, null]
    : board[x][y] = [null, true]
}

const moveView = () => {
  if (space.textContent === '') {
    space.textContent = mark;
    mark === 'X'
      ? mark = 'O'
      : mark = 'X';
  }
}

const checkWin = () => {
  // horizontal check

  // vertical check

  // build major diag array
  // major diag check

  // build minor diag array
  // minor diag check

  // who won?
  // if x wins, tick up x win count and set xWonLast to true
  // if o wins, tick up o win count and set xWonLast to false

  if (moves === dim ** 2) {
    // alert tie, since other outcomes come before this
    // play again dialog y/n
  }
  console.log('no one yet');
};

newGame();
// get whiteboard
// look at hints, adv content, etc to think through structure