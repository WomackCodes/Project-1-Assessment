//  Pseduocode: 

// When the application initially loads, the < input > 's value 
// should be set to 1 and the initial count of 0 is rendered such 
// that the display looks something like initial WIREFRAME Photo


// ------- Cached Elements: -------
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
let runningTotal = document.querySelector("h1").innerText;
inputValue = document.getElementById("inputBox").innerText;


// ------- Functions -------
function init() {
runningTotal = 0;
inputValue = 1;
render();
}
function render() {
}
function handleClick(e) {
    let inputValue = parseInt(inputValue);
    if (e.target === addBtn && inputValue !== NaN) {
        runningTotal += parseInt(inputValue);
        inputValue = "";
        render();
    } else if ((e.target === subBtn && inputValue !== NaN)) {
        runningTotal -= parseInt(inputValue);
        inputValue = "";
        render();
    } else {
        h1.innerHTML = "Not a number, please try again";
    }
}

init();

// ------- Event Listeners -------

document.querySelector("button").addEventListener('click', handleClick);


// Hover ::before add
// Hover ::before subtract