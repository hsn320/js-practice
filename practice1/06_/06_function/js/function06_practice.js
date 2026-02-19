const btn = document.getElementsByClassName("btn");
const result = document.getElementById("result");

function msg(evt){
  result.innerText = evt.target.innerText + "が押された";
}

for(let i=0; i<btn.length; i++){
  btn[i].onclick = msg;
}