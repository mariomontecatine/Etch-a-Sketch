const container = document.querySelector("#container");
let gridSize = 16;
// Iterating to create the 16x16 divs grid
for (let i = 0; i < (gridSize * gridSize); i++) {
    const containerElement = document.createElement("div");
    containerElement.textContent = `${i}`;
    containerElement.classList.add("containerElement");
    containerElement.addEventListener("mouseover", () => {
        containerElement.setAttribute("style", "background-color: beige;");
    }, false);

    container.appendChild(containerElement);
}


