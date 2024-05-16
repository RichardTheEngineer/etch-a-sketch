const container = document.querySelector("#container");
const para = document.createElement("p");
const resetbutton = document.querySelector("#resetbtn");
const eraserButton = document.querySelector("#eraserbtn");

let gridColor = "black";
let size = 2500;

for (let i=0; i<size; i++){
    let gridDiv = document.createElement("div");
    // gridDiv.textContent = i;
    gridDiv.setAttribute("class", "grid")
    container.appendChild(gridDiv);
};

const gridDivs = document.querySelectorAll(".grid");

gridDivs.forEach((gridDiv)=> {
    gridDiv.addEventListener("mouseover", (e)=> {
        e.target.style.backgroundColor = gridColor;
    })
})

function resetClick() {
    gridDivs.forEach((gridDiv)=> {
        gridDiv.style.backgroundColor = "antiquewhite";
    })
    
}

function eraserClick() {
    if (gridColor == "black") {
        gridColor = "antiquewhite";
    }
    else {
        gridColor = "black";
    }
}

eraserButton.addEventListener("click", eraserClick);
resetbutton.addEventListener("click", resetClick);

    
