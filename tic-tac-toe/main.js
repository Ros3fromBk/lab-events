document.addEventListener("DOMContentLoaded", () => {
    makeBoard()
})

function makeBoard() {
    const ticTacToeGrid = document.querySelector(".tic-tac-toe")
    // console.log(ticTacToeGrid)
    //make it a loop 100x
    for (let i = 1; i < 10; i++) {
        const ticTacToeBox = document.createElement("div")
        ticTacToeBox.classList.add("empty", "square")

        ticTacToeGrid.append(ticTacToeBox)
    } //implement this change 

    ticTacToeGrid.addEventListener("click", (event) => {
        console.log("cell clicked");
    }
    )

}
// makeBoard()

function makeMove() {
    const squareDivs = document.querySelectorAll(".square")
    console.log(squareDivs)
    squareDivs.addEventListener("click", (event) =>{console.log("empty");
    squareDivs.append("x", "O")
    if (
        event.target.classList.contains("empty")) {
        // squareDivs.append("x", "O")
        // const newValue = currentColor.style.backgroundColor;
        // event.target.style.backgroundColor = color;
        console.log(event.target)
    }
    makeMove()
    })
}
