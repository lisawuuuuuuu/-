// 七巧板單元的形狀和顏色
const pieces = [
    { id: 1, shape: 'square', color: 'red' },
    { id: 2, shape: 'triangle', color: 'blue' },
    // 添加更多七巧板單元...
];

// 在棋盤上生成七巧板單元
function createPieces() {
    const board = document.getElementById('board');
    pieces.forEach(piece => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.id = piece.id;
        tile.style.backgroundColor = piece.color;
        board.appendChild(tile);
    });
}

// 初始化遊戲
function initGame() {
    createPieces();
}

// 開始遊戲
initGame();
