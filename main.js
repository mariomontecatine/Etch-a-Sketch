const container = document.querySelector("#container");
let gridSize = 16;
displayGrid();

// Iterating to create the gridSizeXgridSize divs grid
function displayGrid() {
    container.innerHTML = "";

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const containerElement = document.createElement("div");
        containerElement.classList.add("containerElement");
        containerElement.addEventListener("mouseover", () => {
            containerElement.setAttribute("style", "background-color: beige;");
        }, false);

        container.appendChild(containerElement);
    }
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
