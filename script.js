const rangeDisplay = document.querySelector(".range-display");
const slider = document.querySelector(".slider");
const gridContainer = document.querySelector(".grid-container");

let dim = slider.value;
rangeDisplay.textContent = `${dim} x ${dim}`;
createGrid(dim);

slider.addEventListener("input", () => {
    dim = slider.value
    rangeDisplay.textContent = `${dim} x ${dim}`;
    createGrid(dim);
});


function createGrid(dim) {
    gridContainer.innerHTML = "";
    for(let i = 0; i < dim * dim; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${500 / dim}px`;
        cell.style.height = `${500 / dim}px`;
        gridContainer.appendChild(cell);
    }
}