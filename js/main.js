
// ------- Cached Elements: -------
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
let runningTotal = document.querySelector("h1");
let whatWeNeed = document.querySelector(".input");
let number;

//Event listener

document.querySelector("#add").addEventListener('click', handleAdd);
document.querySelector("#subtract").addEventListener('click', handleSub);

// Functions
function init() {
    number = 0;
    whatWeNeed.value = 1;
    render();
}

function render() {
    if (number >= 0) {
        runningTotal.textContent = "+" + number;
        runningTotal.style.color = "green";
    } else if (number < 0) {
        runningTotal.textContent = number;
        runningTotal.style.color = "red";
    }
}

function handleAdd() {
    number += parseInt(whatWeNeed.value);
    render();
}

function handleSub() {
    number -= parseInt(whatWeNeed.value);
    render();
}

init();
