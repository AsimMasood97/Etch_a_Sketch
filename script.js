let dimention = 10;
let color = "black";
let tool = "solid";
const canvasSize = 400;

function createCanvas(size) {
	if (size > 0 && size <= 32) {
		dimention = size;
		let boxSize = canvasSize / size;
		sketch.innerHTML = "";
		for (let i = 0; i < dimention * dimention; i++) {
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
	if (e.target.classList.contains("box")) 
		changeColor(e);
});
window.addEventListener("mouseup", (e) => {
	mouseDown = false;
});

function changeColor(e) {
	if(tool === "solid")
		e.target.style.backgroundColor = color;
	else if(tool === "eraser")
		e.target.style.backgroundColor = "white";
	else if(tool === "RGB") {
		let r = Math.floor(Math.random()*257);
		let g = Math.floor(Math.random()*257);
		let b = Math.floor(Math.random()*257);
		e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
	}
		
}

sketch.addEventListener("mouseover", (e) => {
	if (mouseDown && e.target.classList.contains("box")) {
		changeColor(e);
	}
});

sketch.addEventListener("dragstart", (e) => {
	e.preventDefault();
});

document.querySelector(".clearBtn").addEventListener("click", (e) => {
	sketch.querySelectorAll("*").forEach((dec) => {
		dec.style.backgroundColor = "white";
	});
});

let colorPreview = document.querySelector("#colorPreview");
colorPreview.style.backgroundColor = color;
createCanvas(dimention);

let erasorBtn = document.querySelector("#eraserBtn");
erasorBtn.addEventListener("click", (e) => {
	tool = "eraser";
});

let solidBtn = document.querySelector("#solidBtn");
solidBtn.addEventListener("click", e=>{
	tool = "solid";
})

let rgbBtn = document.querySelector("#rgbBtn");
rgbBtn.addEventListener("click", e=>{
	tool = "RGB";
})