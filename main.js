const container = document.querySelector("#container");

for (let i = 0; i < (16 * 16); i++) {
    const containerElement = document.createElement("div");
    containerElement.textContent = `${i}`;
    containerElement.classList.add("containerElement");
    container.appendChild(containerElement);
}

