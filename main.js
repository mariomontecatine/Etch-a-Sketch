const container = document.querySelector("#container");
const controls = document.querySelector("#controls");
const changeGridSizeButton = document.createElement("button");
const cleanGridButton = document.createElement("button");
const colorContainer = document.querySelector("#colorContainer");
let gridSize = 16;
let currentBackground = "white";
let randomColor = false;
let darkening = false;

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
    if (randomColor) {
        grids.forEach((element) => {
            element.addEventListener("mouseover", () => {
                const r = getRandomIntInclusive(1, 256);
                const g = getRandomIntInclusive(1, 256);
                const b = getRandomIntInclusive(1, 256);
                element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        });
    }
    else if (darkening) {
        grids.forEach((element) => {
            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "black";
                element.style.opacity = "0.5";
            }, false);
        });
    }
    else {
        grids.forEach((element) => {
            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "beige";
            }, false);
        })
    }

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

// Random RGB values
const randomColorButton = document.createElement("button");
const randomColorContainer = document.querySelector("#randomColorContainer");

randomColorButton.setAttribute("class", "randomColorButton");
randomColorButton.textContent = "Random colors";
randomColorContainer.appendChild(randomColorButton);

randomColorButton.addEventListener("click", () => {
    if (randomColor) {
        randomColor = false;
    } else {
        randomColor = true;
    }
    displayGrid();
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Progressive darkening effect
const darkeningButton = document.createElement("button");
const darkeningOption = document.querySelector("#darkeningOption");

darkeningButton.setAttribute("class", "randomColorButton");
darkeningButton.textContent = "Try it!";
darkeningOption.appendChild(darkeningButton);

darkeningButton.addEventListener("click", () => {
    if (darkening) {
        darkening = false;
    } else {
        darkening = true;
    }
    displayGrid();
})




