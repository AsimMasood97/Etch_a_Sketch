let sketch = document.querySelector(".SketchContainer");
let createBtn = document.querySelector(".createGrid");
const canvasSize = 400;
createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let num = document.querySelector("#gridSize").value;
	if (num > 0 && num <= 32) {
		rows = cols = num;
		let boxSize = canvasSize / num;
		sketch.innerHTML = "";
		for (let i = 0; i < rows; i++) {
			sketch.innerHTML += `<div class = "SubContainers" id = con${i}></div>`;
			let SubCon = document.querySelector(`#con${i}`);
			for (let j = 0; j < cols; j++) {
				SubCon.innerHTML += `<div class = "box" style = "height: ${boxSize}px; width: ${boxSize}px;"></div>`;
			}
		}
	}
});

let rows = 10;
let cols = 10;
let color = "black";
for (let i = 0; i < rows; i++) {
	sketch.innerHTML += `<div class = "SubContainers" id = con${i}></div>`;
	let SubCon = document.querySelector(`#con${i}`);
	for (let j = 0; j < cols; j++) {
		SubCon.innerHTML += `<div class = "box" style = "height: 40px; width: 40px;"></div>`;
	}
}

let buttonPressed = false;
sketch.addEventListener("mousedown", (e) => {
	buttonPressed = true;
	if (e.target.classList.contains("box")) changeColor(e);
});
sketch.addEventListener("mouseup", (e) => {
	buttonPressed = false;
});

function changeColor(e) {
	console.log(e.target);
	e.target.style.backgroundColor = color;
}

sketch.addEventListener("mouseover", (e) => {
	if (buttonPressed && e.target.classList.contains("box")) {
		changeColor(e);
	}
});
