const container = document.getElementById("container");

function makeRows(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeColumns(cellNum) {
  let rows = document.getElementsByClassName("gridRow");
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      newCell.className = "cell";
      newCell.addEventListener("mouseover", changeColor);
      rows[i].appendChild(newCell).className = "cell";
    }
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = "black";
}

function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

document.addEventListener("DOMContentLoaded", () => {
  defaultGrid();
});
