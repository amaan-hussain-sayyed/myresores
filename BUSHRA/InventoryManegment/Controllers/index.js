const GRID_SIZE = 9;
let grid = new Array(GRID_SIZE).fill(null).map(() => new Array(GRID_SIZE).fill(0));
let copy=[];
// Function to check if a number is valid in a specific position
function isValidMove(grid, row, col, num) {
    // Check row
    for (let i = 0; i < GRID_SIZE; i++) {
        if (grid[row][i] === num) return false;
    }

    // Check column
    for (let i = 0; i < GRID_SIZE; i++) {
        if (grid[i][col] === num) return false;
    }

    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grid[i][j] === num) return false;
        }
    }

    return true;
}

// Function to fill initial numbers randomly
function fillInitialNumbers(grid) {
    // Randomly fill around 20 cells with valid numbers
    let remainingCells = 20;
    while (remainingCells > 0) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const num = Math.floor(Math.random() * GRID_SIZE) + 1;
        if (isValidMove(grid, row, col, num)) {
            grid[row][col] = num;
            remainingCells--;
        }
    }
}

// Function to solve Sudoku using backtracking
function solveSudoku(grid) {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (grid[row][col] === 0) {
                for (let num = 1; num <= GRID_SIZE; num++) {
                    if (isValidMove(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solveSudoku(grid)) {
                            return true;
                        }
                        grid[row][col] = 0; // Backtrack
                    }
                }
                return false;
            }
        }
    }
    return true; // Sudoku solved
}

// Function to generate a valid Sudoku puzzle
function generateSudoku() {
    fillInitialNumbers(grid);
    copy=grid
    solveSudoku(grid);
 
    // Randomly remove some numbers while ensuring solvability
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (Math.random() > 0.7) { // Adjust the probability to remove more or fewer numbers
                const temp = grid[i][j];
                grid[i][j] = 0;
                // Check if the puzzle is still solvable
                if (!solveSudoku(grid)) {
                    grid[i][j] = temp; // If not solvable, revert the change
                }
            }
        }
    }
}

// Function to display the generated Sudoku puzzle
function displaySudoku(grid) {
    for (let i = 0; i < GRID_SIZE; i++) {
        console.log(grid[i].join(' '));
    }
}

// Generate and display the Sudoku puzzle
generateSudoku();
displaySudoku(grid);