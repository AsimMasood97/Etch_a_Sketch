let dimention = 10;
let color = "black";
const canvasSize = 400;


function createCanvas(size){
	if (size > 0 && size <= 32) {
		dimention = size;
		let boxSize = canvasSize / size;
		sketch.innerHTML = "";
		for(let i = 0; i<dimention*dimention; i++) {

			let newbox = document.createElement("div");
			newbox.style.height = `${boxSize}px`;
			newbox.style.width = `${boxSize}px`;
			newbox.classList.add("box");
			sketch.appendChild(newbox);
		}
	}
}

let sketch = document.querySelector(".SketchContainer");
let createBtn = document.querySelector(".createGrid");

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let size = document.querySelector("#gridSize").value;
	createCanvas(size);
});



let mouseDown = false;
window.addEventListener("mousedown", (e) => {
	mouseDown = true;
	if (e.target.classList.contains("box")) changeColor(e);
});
window.addEventListener("mouseup", (e) => {
	mouseDown = false;
});

function changeColor(e) {
	console.log(e.target);
	e.target.style.backgroundColor = color;
}

sketch.addEventListener("mouseover", (e) => {
	if (mouseDown && e.target.classList.contains("box")) {
		changeColor(e);
	}
});

sketch.addEventListener("dragstart", (e) => {
	e.preventDefault();
});


createCanvas(dimention);