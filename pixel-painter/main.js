///create the grid
const canvasGrid = document.querySelector("#canvas")
console.log(canvasGrid)
//make it a loop 100x
for (let i = 1; i < 100; i++) {
    const newGridBox = document.createElement("div")
    newGridBox.classList.add("cell")

    canvasGrid.append(newGridBox)
} //implement this change 

canvasGrid.addEventListener("click", (event) => {
    console.log("cell clicked");

    if (event.target.classList.contains("cell")) {
        const color = currentColor.style.backgroundColor;
        event.target.style.backgroundColor = color;
        console.log("hey im a color", color)
    }
})

const palette = document.querySelector("#palette")
const currentColor = document.querySelector("#current-color")
const cells = document.querySelectorAll(".cells")

