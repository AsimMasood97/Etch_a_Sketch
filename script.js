let dimention = 10;
let color = "black";
const canvasSize = 400;

function init() {
	for(let i = 0; i<dimention*dimention; i++) {
		sketch.innerHTML += `<div class = "box" style = "height: 40px; width: 40px;"></div>`;
	}
}

let sketch = document.querySelector(".SketchContainer");
let createBtn = document.querySelector(".createGrid");

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let size = document.querySelector("#gridSize").value;
	if (size > 0 && size <= 32) {
		dimention = size;
		let boxSize = canvasSize / size;
		sketch.innerHTML = "";
		for(let i = 0; i<rows*cols; i++) {
			sketch.innerHTML += `<div class = "box" style = "height: ${boxSize}px; width: ${boxSize}px;"></div>`;
		}
	}
});



let mouseDown = false;
sketch.addEventListener("mousedown", (e) => {
	mouseDown = true;
	if (e.target.classList.contains("box")) changeColor(e);
});
sketch.addEventListener("mouseup", (e) => {
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


init();