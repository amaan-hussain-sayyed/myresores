
let playerx = { name: "X", score: 0 }
let playero = { name: "O", score: 0 }
let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "X";
let draw = 0
let total=0
let cell = document.getElementsByClassName('cell')
let winnerbord = document.getElementsByClassName("winnerboard")
function start() {
    playerx.name = document.getElementsByClassName("playerx")[0].value
    playero.name = document.getElementsByClassName("playero")[0].value
    document.getElementsByClassName('players')[0].style.display = "none"

    for (let i in cell) {
      cell[i].style.display=" grid"
        console.log(cell[i].classList)
    }

}
function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
      cell[index].textContent = currentPlayer;
      cell[index].style.background = "#ffffff";
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        document.getElementsByClassName('turn')[0].textContent = "player " + currentPlayer + " turn"
    }
    checkWinner();

}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]           // Diagonals
    ];

    for (const combo of winningCombos) {

        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementsByClassName('cell')[a].style.background = "#ff00ea";
            document.getElementsByClassName('cell')[b].style.background = "#ff00ea";
            document.getElementsByClassName('cell')[c].style.background = "#ff00ea";

            console.log("hello")
            if (board[a] == "X") {
                playerx.score++
                total++
                setTimeout(() => alert(playerx.name + " is the winner! Score: " + playerx.score + " and " + playero.score + " " + playero.name + " Total matches: " + total + " draws: " + draw), 200)
                resetBoard()
                break
            }
            if (board[a] == "O") {
                playero.score++
                total++
                setTimeout(() => alert(playero.name + " is the winner! Score: " + playero.score + " and " + playerx.score + " " + playerx.name + " Total matches: " + total + " draws: " + draw), 200)
                resetBoard()
                break
            }
        }
    }
    if (board.every(ind => ind !== null)) {
        draw++
        total++
        setTimeout(() => alert("It's a draw!" + " Total matches: " + total + " draws: " + draw + " Score: " + playerx.name + ": " + playerx.score + " and " + playero.name + ": " + playero.score), 200) //alert("It's a draw!");
       
        resetBoard()
    }
    return
}

function resetBoard() {
    setTimeout(() => {
        board = [null, null, null, null, null, null, null, null, null];
        document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
        document.querySelectorAll('.cell').forEach(cell => cell.style.background = '#ffffff95');
        
    },1000)
}