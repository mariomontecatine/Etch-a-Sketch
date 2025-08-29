const container = document.querySelector("#container");
let gridSize = 6;
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
            grid.style.opacity = 0;
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

const controls = document.querySelector("#controls");
const changeGridSizeButton = document.createElement("button");
changeGridSizeButton.textContent = "Change size";
changeGridSizeButton.classList.add("changeGridSizeButton");

controls.appendChild(changeGridSizeButton);



changeGridSizeButton.addEventListener("click", () => {
    const sizeChosePrompt = window.prompt("Enter the size that you want (<=100)");
    gridSize = sizeChosePrompt;
    displayGrid();
}, false);
