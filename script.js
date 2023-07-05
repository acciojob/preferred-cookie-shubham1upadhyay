const fontSizeInput = document.getElementById("fontsize")
const fontColorInput = document.getElementById("fontcolor")


function set(){
  let fValue = fontSizeInput.value;
  let cValue = fontColorInput.value;

  let cookieString = fValue + '=' + cValue;
  let sCookie = cookieString.split("=")
document.cookie = sCookie;

  document.body.style.fontSize = `${sCookie[0]}px`;
  document.body.style.color = sCookie[1];
}
document.addEventListener('submit', (event)=>{
	event.preventDefault();
	set();
})