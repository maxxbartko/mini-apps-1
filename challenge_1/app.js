let mark = 'X';
let moves = 0;

let victoryX = false;
let victoryO = false;

let board = [];

let space, x, y;

const newGame = () => {
  mark = 'X';
  moves = 0;
  board = [];

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
      space.innerHTML = '';
      let text = document.createTextNode('');
      space.appendChild(text);
    }
  }
};

let button = document.getElementById('button');
button.addEventListener('click', newGame);

const moveHandler = (e) => {
  space = e.currentTarget;
  [x, y] = space.id.split(',');

  if (board[x][y].includes(null)) {
    alert('SPACE OCCUPIED');
  } else {
    moveModel(x, y);
    moveView(space);
  }
};

const moveModel = (x, y) => {
  board[x][y] = mark === 'X' ? [true, null] : [null, true];
  moves++;
  if (moves > 4) { checkWin(); }
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
      setTimeout(() => alert('TIE'), 10);
    }
  }
}
// if 3 is odd, check midpoint for ez diag check vertical check build major
// diag array major diag check build minor diag array minor diag check who won?
// if x wins, tick up x win count and set xWonLast to true if o wins, tick up o
// win count and set xWonLast to false


// get whiteboard look at hints, adv content, etc to think through structure

newGame();