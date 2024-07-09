let ap = 0
let bp = 0
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];


function start() {
    document.getElementsByClassName('players')[0].style.display = "none"
    document.getElementsByClassName('game-container')[0].style.display = "block"
    document.getElementsByClassName('cell').style.display = "block" 

}


async  function makeMove(index) {
    await fillCell(index);
    setTimeout(checkWinner, 10);
}

async function fillCell(index) {
    
    if (!board[index]) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        document.getElementsByClassName('turn')[0].textContent = "player " + currentPlayer + " turn"

    }
}




async function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]           // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
             
            if (board[a] == "X") {
                ap++
                alerting(`Player ${board[a]} wins!  score ${ap} player O score ${bp}`);
                return;
            }
            if (board[a] == "O") {
                bp++
                 
                alerting(`Player ${board[a]} wins!  score ${bp} player X score ${ap}`);
                return;
            }
        }
    }

    if (board.every(cell => cell !== '')) {
         
        alerting("It's a draw!");
    }
}

async function alerting(text) {
    setTimeout(() => alert(text), 10);
    resetBoard();
}
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}