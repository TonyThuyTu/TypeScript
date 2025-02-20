var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.init();
    }
    TicTacToe.prototype.init = function () {
        var _this = this;
        // Attach event listeners to all cells
        var cells = document.querySelectorAll('.cell');
        cells.forEach(function (cell) {
            // Clear any previous content
            cell.textContent = "";
            // Remove any old click listeners by cloning the node (if necessary)
            cell.replaceWith(cell.cloneNode(true));
        });
        // Re-select the cells and attach the listeners
        var updatedCells = document.querySelectorAll('.cell');
        updatedCells.forEach(function (cell) {
            cell.addEventListener('click', function (e) { return _this.handleClick(e); });
        });
        // Attach event listener to the restart button
        var restartBtn = document.getElementById('restartBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', function () { return _this.restartGame(); });
        }
    };
    TicTacToe.prototype.handleClick = function (e) {
        var _this = this;
        if (this.gameOver)
            return;
        var cell = e.target;
        var index = Number(cell.getAttribute('data-index'));
        if (this.board[index])
            return; // Cell already taken
        // Update board state and UI
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        // Check for win or draw
        if (this.checkWinner()) {
            setTimeout(function () { return alert("Player ".concat(_this.currentPlayer, " wins!")); }, 100);
            this.gameOver = true;
        }
        else if (this.checkDraw()) {
            setTimeout(function () { return alert("It's a draw!"); }, 100);
            this.gameOver = true;
        }
        else {
            this.switchPlayer();
        }
    };
    TicTacToe.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    };
    TicTacToe.prototype.checkWinner = function () {
        var _this = this;
        var winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return winConditions.some(function (condition) {
            var a = condition[0], b = condition[1], c = condition[2];
            return (_this.board[a] !== null &&
                _this.board[a] === _this.board[b] &&
                _this.board[a] === _this.board[c]);
        });
    };
    TicTacToe.prototype.checkDraw = function () {
        return this.board.every(function (cell) { return cell !== null; });
    };
    TicTacToe.prototype.restartGame = function () {
        // Reset the board state
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
        // Clear the UI board
        var cells = document.querySelectorAll('.cell');
        cells.forEach(function (cell) {
            cell.textContent = "";
        });
    };
    return TicTacToe;
}());
// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new TicTacToe();
});
