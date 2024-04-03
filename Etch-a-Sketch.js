const container = document.getElementById("container");

function makeGrid(rows, cols) {
  const containerSize = 960;
  let cellSize = (containerSize / rows) * cols;

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  container.style.gridTemplateColumns = `repeat(${cols}), ${cellSize}px`;

  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell);
  }
}

function changeColor(event) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.backgroundColor = randomColor;
}

function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

document.addEventListener("DOMContentLoaded", () => {
  defaultGrid();
});
