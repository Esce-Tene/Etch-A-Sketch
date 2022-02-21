const container = document.getElementById('container');
const button = document.getElementById('reset');
makeGrid(16);

function makeGrid(n) {
  for(let i = 0; i < n; i++) {
    let row = document.createElement('div');
    row.id = "row"
    for(let j = 0; j < n; j++) {
      let cell = document.createElement('div')
      cell.style.height = (650 / n) + "px"
      cell.style.width = (650 / n) + "px"
      cell.id = "block"
      cell.addEventListener('mouseover', hoverColor);
      row.appendChild(cell);
    document.getElementById("container").appendChild(row);
  }
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${n}, 2fr)`
  )}
  container.style.setProperty(
    "grid-template-row",
    `repeat(${n}, 2fr)`
  )}

function hoverColor($event) {
  const item = $event.target;
  item.classList.add('white');
}

button.addEventListener('click', () => {
  container.textContent = "";
  let promptPlayer = prompt("Enter a grid size")
  let gridSize = parseInt(promptPlayer);
  if (gridSize > 100) {
      alert("Max reached - Creating a 100x100 grid")
      makeGrid(100);
    }
  else {
    makeGrid(gridSize);
  }
})