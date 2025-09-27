const btn = document.getElementsByClassName("btn");
const result = document.getElementById("result");

function msg(e){
  result.innerText = e.target.innerText + "が押された";
}

for(let i=0; i<btn.length; i++){
  btn[i].onclick = msg;
}