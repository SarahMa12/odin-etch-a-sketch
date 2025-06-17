const rangeDisplay = document.querySelector(".range-display");
const slider = document.querySelector(".slider");
const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");
const toggleGrid = document.querySelector(".toggle-grid");

toggleGrid.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        if(cell.style.border == "none") {
            cell.style.border = "1px solid black";
        } else {  
            cell.style.border = "none";
        }
    });
});

let currentColor = colorPicker.value;

colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});

let dim = slider.value;
rangeDisplay.textContent = `${dim} x ${dim}`;
createGrid(dim);

slider.addEventListener("input", () => {
    dim = slider.value;
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
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `${currentColor}`;
        });
    }
}

const rangeInput = document.querySelector(".range-input");

rangeInput.addEventListener("input", () => {
    let input = rangeInput.value;
    if(input < 1) {
        dim = 1;
    } else if(input > 100) {
        dim = 100;
    } else {
        dim = input;
    }
    rangeDisplay.textContent = `${dim} x ${dim}`;
    createGrid(dim);
});

const color = document.querySelector(".color");

color.addEventListener("click", () => {
    currentColor = colorPicker.value;
});

const rainbow = document.querySelector(".rainbow");

rainbow.addEventListener("click", () => {

});

const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", () => {
    currentColor = "white";
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    createGrid(dim);
});
