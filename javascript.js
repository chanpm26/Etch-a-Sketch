const container = document.querySelector('#container')

let gridSquares = function createDiv(number) {
    for (let i = 0; i < (number*number); i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${number}, minmax(7px, 700px))`;
        container.style.gridTemplateRows = `repeat(${number}, minmax(7px, 700px))`;
}
let squares = document.querySelectorAll("#container > div")
for (const square of squares) {
square.addEventListener('mouseover', () => {
    square.classList.add("hover")
})
}
}

gridSquares(16)

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector('#button')
button.addEventListener('click', () => {
    let promptAnswer = prompt("Let's make a new grid! How many squares per side do you want?", "Enter a number less than 100")
    if (promptAnswer > 100) {
        alert("That number is too big, please enter a new one less than 100") 
        } else {
            removeAllChildNodes(container);
            gridSquares(promptAnswer)
        }
} )

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    window.location.reload()
})
