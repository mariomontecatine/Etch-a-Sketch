const container = document.querySelector("#container");
const controls = document.querySelector("#controls");
const changeGridSizeButton = document.createElement("button");
const cleanGridButton = document.createElement("button");
const colorContainer = document.querySelector("#colorContainer");
let gridSize = 16;
let currentBackground = "white";

displayGrid();

// Iterating to create the gridSizeXgridSize divs grid
function displayGrid() {
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const containerElement = document.createElement("div");
        containerElement.classList.add("containerElement");
        container.appendChild(containerElement);
        for (let j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.style.backgroundColor = currentBackground;
            containerElement.appendChild(grid);
        }


    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.setAttribute("style", "background-color: beige;");
        }, false);
    })
}

// Change canvas size slider
const slider = document.getElementById("gridSize");
const gridValue = document.getElementById("gridValue");
const gridValue2 = document.getElementById("gridValue2");

slider.addEventListener("input", () => {
    gridSize = slider.value;
    gridValue.textContent = gridSize;
    gridValue2.textContent = gridSize;
    displayGrid();
})

// Clean canvas button function
cleanGridButton.textContent = "Clean canvas";
cleanGridButton.setAttribute("class", "cleanGridButton");
controls.appendChild(cleanGridButton);

cleanGridButton.addEventListener("click", () => {
    displayGrid();
}, false)

// Change background color
const whiteBackground = document.createElement("button");
const blackBackground = document.createElement("button");

whiteBackground.setAttribute("class", "colorButton");
blackBackground.setAttribute("class", "colorButton");

whiteBackground.textContent = "White"
blackBackground.textContent = "Black"

colorContainer.appendChild(whiteBackground);
colorContainer.appendChild(blackBackground);

whiteBackground.addEventListener("click", () => {
    currentBackground = "white";
    displayGrid();
}, false);

blackBackground.addEventListener("click", () => {
    currentBackground = "black";
    displayGrid();
}, false);




