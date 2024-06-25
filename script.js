let sketch = document.querySelector(".SketchContainer")
let rows = 10;
let cols = 10;
let color = "black"; 
for(let i = 0; i<rows;i++) {
    sketch.innerHTML +=`<div class = "SubContainers" id = con${i}></div>`;
    let SubCon = document.querySelector(`#con${i}`);
    for(j = 0; j<cols;j++){
        SubCon.innerHTML+= `<div class = "box"></div>`
    }
} 

let buttonPressed = false; 
sketch.addEventListener("mousedown", (e)=>{buttonPressed = true; changeColor(e)})
sketch.addEventListener("mouseup", (e)=>{buttonPressed = false})

function changeColor(e){
    console.log(e.target);
    e.target.style.backgroundColor = color; 
}

sketch.addEventListener("mouseover", (e)=>{
    if(buttonPressed && e.target.classList.contains("box")){
        changeColor(e);
    }
    
})
