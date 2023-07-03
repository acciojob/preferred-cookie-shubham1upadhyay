const fontSizeInput = document.getElementById("fontsize")
const fontColorInput = document.getElementById("fontcolor")

let cookies = document.cookie ;

function set(){
  let fValue = fontSizeInput.value;
  let cValue = fontColorInput.value;

  let cookieString = fValue + '=' + cValue;

  let sCookie = cookieString.split("=")

  document.body.style.fontSize = `${sCookie[0]}px`;
  console.log( document.body.style.fontSize = `${sCookie[0]}px`)
  document.body.style.color = sCookie[1];
  console.log(document.body.style.color = sCookie[1])
}
document.addEventListener('submit', (event)=>{
	event.preventDefault();
	set();
})