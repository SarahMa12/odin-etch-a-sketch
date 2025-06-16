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
        cell.style.width = `${gridContainer.clientWidth / dim}px`;
        cell.style.height = `${gridContainer.clientWidth / dim}px`;
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        gridContainer.appendChild(cell);
    }
}