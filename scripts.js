const container = document.querySelector("#container");
const para = document.createElement("p");
const resetbutton = document.querySelector("#resetbtn");
const eraserButton = document.querySelector("#eraserbtn")
const sizeButton = document.querySelector("#sideLength")

let gridColor = "black";
let size = 4**2;
let height = (1/Math.sqrt(size))*100;
let inputSize = document.querySelector("#sideLength");

for (let i=0; i<size; i++){
    let gridDiv = document.createElement("div");
    // gridDiv.textContent = i;
    gridDiv.setAttribute("class", "grid")
    gridDiv.style.height = height + "%";
    gridDiv.style.width = height + "%";
    gridDiv.style.opacity = 0;
    container.appendChild(gridDiv);
};

let gridDivs = document.querySelectorAll(".grid");

gridDivs.forEach((gridDiv)=> {
    gridDiv.addEventListener("mouseover", (e)=> {
        e.target.style.backgroundColor = gridColor;
        const currentOpacity = e.target.style.opacity;
        const newOpacity = Number(currentOpacity) + 0.1;
        e.target.style.opacity = newOpacity;

    })
})

function resetClick() {
    gridDivs.forEach((gridDiv)=> {
        gridDiv.style.backgroundColor = "papayawhip";
        gridColor = "black"
        gridDiv.style.opacity = 0;
        eraserButton.classList.remove("active");
    })
    
}

function eraserClick() {

    eraserButton.classList.toggle("active");
    if (gridColor == "black") {
        gridColor = "papayawhip";
    }
    else {
        gridColor = "black";
    }
}


eraserButton.addEventListener("click", eraserClick);
resetbutton.addEventListener("click", resetClick);
sizeButton.addEventListener("click", () => {
    input = (prompt("Type in the side length (Max: 100): ", "50" ))**2;
    if (input <= 10000){
        size = input;
    }
    else {
        size = 100**2;
    }
    height = (1/Math.sqrt(size))*100;
    container.innerHTML = ''
    for (let i=0; i<size; i++){
        let gridDiv = document.createElement("div");
        // gridDiv.textContent = i;
        gridDiv.setAttribute("class", "grid")
        gridDiv.style.height = height + "%";
        gridDiv.style.width = height + "%";
        gridDiv.style.opacity = 0;
        container.appendChild(gridDiv);
    };
    gridDivs = document.querySelectorAll(".grid");
    gridDivs.forEach((gridDiv)=> {
        gridDiv.addEventListener("mouseover", (e)=> {
            e.target.style.backgroundColor = gridColor;
            const currentOpacity = e.target.style.opacity;
            const newOpacity = Number(currentOpacity) + 0.1;
            e.target.style.opacity = newOpacity;
    
        })
    })
})


    
