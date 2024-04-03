const container = document.getElementById("container");

function makeGrid(rows, cols) {
  const containerSize = 960; // Total size of the container
  let cellSize = containerSize / rows; // Size of each cell to fit in container

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  container.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;

  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  makeGrid(16, 16); // Default 16x16 grid
});

document.addEventListener("DOMContentLoaded", () => {
  makeGrid(16, 16);
});

function createNewGrid() {
  let gridSize = prompt(
    "Enter the number of squares per side for the new grid (1-100):",
    "16"
  );
  gridSize = parseInt(gridSize);

  // Check if the input is a positive integer within the allowed range
  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    container.innerHTML = ""; // Clear the existing grid
    makeGrid(gridSize, gridSize); // Create a new grid
  } else if (gridSize > 100) {
    alert(
      "The maximum number of squares per side is 100. Please enter a smaller number."
    );
  } else {
    alert("Please enter a valid positive number between 1 and 100.");
  }
}

document
  .getElementById("newGridButton")
  .addEventListener("click", createNewGrid);
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
