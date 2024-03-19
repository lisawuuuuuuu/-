document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('dragstart', dragStart);
        tile.addEventListener('dragend', dragEnd);
    });

    function dragStart(event) {
        this.classList.add('dragging');
    }

    function dragEnd(event) {
        this.classList.remove('dragging');
    }

    const board = document.getElementById('board');

    board.addEventListener('dragover', dragOver);
    board.addEventListener('drop', drop);

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const tile = document.querySelector('.dragging');
        const rect = board.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - tile.offsetWidth / 2;
        const offsetY = event.clientY - rect.top - tile.offsetHeight / 2;
        tile.style.left = offsetX + 'px';
        tile.style.top = offsetY + 'px';
    }
});
