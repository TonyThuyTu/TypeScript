class TicTacToe {
    constructor() {
        // Khởi tạo
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.winningCells = [];
        // Lấy các phần tử HTML
        this.boardElement = document.getElementById('board');
        this.statusElement = document.getElementById('status');
        this.restartBtn = document.getElementById('restart-btn');
        // Gắn sự kiện
        this.boardElement.addEventListener('click', (e) => this.handleCellClick(e));
        this.restartBtn.addEventListener('click', () => this.resetGame());
        // Hiển thị ban đầu
        this.render();
        this.updateStatus();
    }
    // Hàm xử lý khi click vào ô
    handleCellClick(e) {
        if (this.gameOver)
            return;
        const target = e.target;
        if (!target.classList.contains('cell'))
            return;
        const index = Number(target.dataset.index);
        // Nếu ô đã có giá trị thì bỏ qua
        if (this.board[index] !== '')
            return;
        // Đánh dấu ô bằng ký hiệu người chơi hiện tại
        this.board[index] = this.currentPlayer;
        // Kiểm tra kết quả
        const winPattern = this.checkWin(this.currentPlayer);
        if (winPattern) {
            // Lưu lại ô thắng
            this.winningCells = winPattern;
            this.statusElement.textContent = `Người chơi ${this.currentPlayer} thắng!`;
            this.gameOver = true;
        }
        else if (this.isBoardFull()) {
            this.statusElement.textContent = `Hòa!`;
            this.gameOver = true;
        }
        else {
            // Đổi lượt
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus();
        }
        // Cập nhật giao diện
        this.render();
    }
    // Cập nhật nội dung hiển thị của mỗi ô
    render() {
        const cells = this.boardElement.querySelectorAll('.cell');
        cells.forEach((cell, i) => {
            const cellElement = cell;
            cellElement.textContent = this.board[i];
            // Xóa class win-cell trước (để tránh sót lại khi chơi tiếp)
            cellElement.classList.remove('win-cell');
            // Nếu i thuộc mảng ô thắng, tô sáng
            if (this.winningCells.includes(i)) {
                cellElement.classList.add('win-cell');
            }
        });
    }
    // Cập nhật trạng thái hiển thị (lượt chơi, v.v.)
    updateStatus() {
        this.statusElement.textContent = `Lượt chơi: ${this.currentPlayer}`;
    }
    // Kiểm tra người chơi (X hoặc O) có thắng chưa
    // Nếu thắng trả về mảng 3 vị trí, ngược lại null
    checkWin(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] === player &&
                this.board[b] === player &&
                this.board[c] === player) {
                return pattern; // Trả về mảng vị trí thắng
            }
        }
        return null;
    }
    // Kiểm tra xem bảng đã đầy chưa
    isBoardFull() {
        return this.board.every(cell => cell !== '');
    }
    // Reset game
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.winningCells = []; // Xóa ô thắng cũ
        this.render();
        this.updateStatus();
    }
}
// Khởi tạo game khi DOM load xong
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
