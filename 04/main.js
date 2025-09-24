var _grid = null;
var _selectedCell = null;
const _cellSize = 20;

function onCellEnter(e) {
    let cell = e.target;
    cell.classList.add('lit');
}

function onCellLeave(e) {
    let cell = e.target;
    cell.classList.remove('lit');
}

function onCellClick(e) {
    let cell = e.target;
    if (_selectedCell != null) {
        _selectedCell.classList.remove('selected');
    }
    _selectedCell = cell;
    cell.classList.add('selected');

}

function createGrid(size) {
    grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.display = 'grid';
    grid.style.gridTemplate = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
    grid.style.width = _cellSize * size + 'px';
    grid.style.height = _cellSize * size + 'px';
    for (let gi=0; gi<size; gi++) {
        for (let gj=0; gj<size; gj++) {
            let cell = document.createElement('div');
            //cell.innerHTML = gi+'-'+gj;
            cell.addEventListener('pointerenter', onCellEnter);
            cell.addEventListener('pointerleave', onCellLeave);
            cell.addEventListener('click', onCellClick);
            grid.appendChild(cell);
        }
    }
    document.body.appendChild(grid);
}

window.addEventListener('load', () => {
    createGrid(8);
});