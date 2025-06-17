const rangeDisplay = document.querySelector(".range-display");
const slider = document.querySelector(".slider");
const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");

let currentMode = "color";
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
            if(currentMode == "color") {
                cell.style.backgroundColor = currentColor;
            } else if(currentMode == "eraser") {
                cell.style.backgroundColor = "white";
            } else if(currentMode == "rainbow") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
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

const buttonModes = document.querySelectorAll(".button-mode");

buttonModes.forEach((button) => {
    button.addEventListener("click", () => {
        currentMode = button.id;

        buttonModes.forEach((btn) => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    createGrid(dim);
});

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
