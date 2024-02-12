let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementById('game').children[row].children[col].innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            alert(`${gameBoard[i][0]} wins!`);
            resetGame();
            return;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            alert(`${gameBoard[0][i]} wins!`);
            resetGame();
            return;
        }
    }

    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        alert(`${gameBoard[0][0]} wins!`);
        resetGame();
        return;
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        alert(`${gameBoard[0][2]} wins!`);
        resetGame();
        return;
    }

    // Check for draw
    let isDraw = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] === '') {
                isDraw = false;
                break;
            }
        }
    }
    if (isDraw) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('game').children[i].children[j].innerText = '';
        }
    }
}
