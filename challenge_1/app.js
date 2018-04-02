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

const moveHere = (e) => {
    let space = e.currentTarget;

    if (space.textContent === '|||') {
        space.textContent = mark;
        mark === 'X' ? mark = 'O' : mark = 'X';
    }

    if (moves > 4) checkWin();

    moves++;
};

const checkWin = () => {
    
};

const renderBoard = () => {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            // set click handlers
            let space = document.getElementById(`${x},${y}`);
            space.addEventListener('click', moveHere, false);
            // set blank space
            let text = document.createTextNode('|||');
            space.appendChild(text);
        }
    }
};

renderBoard();
// get whiteboard
// look at hints, adv content, etc to think through structure