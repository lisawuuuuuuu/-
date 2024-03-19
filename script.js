// 監聽拖動事件
document.addEventListener('DOMContentLoaded', function() {
    let dragItem = null;

    // 設置拖動開始事件
    document.addEventListener('dragstart', function(event) {
        dragItem = event.target;
        event.dataTransfer.setData('text/plain', null);
    });

    // 設置放置事件
    document.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    // 設置放置目標事件
    document.addEventListener('drop', function(event) {
        if (dragItem) {
            event.preventDefault();
            let x = event.clientX - dragItem.offsetWidth / 2;
            let y = event.clientY - dragItem.offsetHeight / 2;
            dragItem.style.position = 'absolute';
            dragItem.style.left = x + 'px';
            dragItem.style.top = y + 'px';
            dragItem = null;
        }
    });
});

