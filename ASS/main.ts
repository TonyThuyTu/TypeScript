type Player = 'X' | 'O' | null;

class TicTacToe {
  board: Player[];
  currentPlayer: 'X' | 'O';
  gameOver: boolean;

  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.init();
  }

  init(): void {
    // Attach event listeners to all cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      // Clear any previous content
      cell.textContent = "";
      // Remove any old click listeners by cloning the node (if necessary)
      cell.replaceWith(cell.cloneNode(true));
    });

    // Re-select the cells and attach the listeners
    const updatedCells = document.querySelectorAll('.cell');
    updatedCells.forEach(cell => {
      cell.addEventListener('click', (e) => this.handleClick(e));
    });

    // Attach event listener to the restart button
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.restartGame());
    }
  }

  handleClick(e: Event): void {
    if (this.gameOver) return;
    const cell = e.target as HTMLElement;
    const index = Number(cell.getAttribute('data-index'));
    if (this.board[index]) return; // Cell already taken

    // Update board state and UI
    this.board[index] = this.currentPlayer;
    cell.textContent = this.currentPlayer;

    // Check for win or draw
    if (this.checkWinner()) {
      setTimeout(() => alert(`Player ${this.currentPlayer} wins!`), 100);
      this.gameOver = true;
    } else if (this.checkDraw()) {
      setTimeout(() => alert("It's a draw!"), 100);
      this.gameOver = true;
    } else {
      this.switchPlayer();
    }
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner(): boolean {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winConditions.some(condition => {
      const [a, b, c] = condition;
      return (
        this.board[a] !== null &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      );
    });
  }

  checkDraw(): boolean {
    return this.board.every(cell => cell !== null);
  }

  restartGame(): void {
    // Reset the board state
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.gameOver = false;

    // Clear the UI board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = "";
    });
  }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TicTacToe();
});
