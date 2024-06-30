const board = document.getElementById("hoverBoard");
const colors = ["OrangeRed", "Cyan", "MediumBlue", "LawnGreen"];
const squares = 1000;

for(let i = 0; i < squares; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("hover-board__pixel");

    pixel.addEventListener("mouseover", () => setColor(pixel));
    pixel.addEventListener("mouseout", () => removeColor(pixel));

    board.appendChild(pixel);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#c3c3c3";
    element.style.boxShadow = "none";
}

function getRandomColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
