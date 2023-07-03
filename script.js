const fontSizeInput = document.getElementById("fontsize")
const fontColorInput = document.getElementById("fontcolor")

function set(){
	let size = fontSizeInput.value;
	let color = fontColorInput.value;
	localStorage.setItem('size', size)
	localStorage.setItem('color', color);

	apply();
}

function apply(){
	let s = localStorage.getItem('size');
	let c = localStorage.getItem('color');

	document.body.style.fontSize = `${s}px`;
	document.body.style.color = c;
}

document.addEventListener('submit', (event)=>{
	event.preventDefault();
	set();
})

window.addEventListener('load', ()=>{
	apply();
})