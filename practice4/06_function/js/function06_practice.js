// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// const btnC = document.getElementById("btnC");
// const result = document.getElementById("result");

// btnA.onclick = () => {
//   result.innerText = "btnAが押された";
// }

// btnB.onclick = () => {
//   result.innerText = "btnBが押された";
// }

// btnC.onclick = () => {
//   result.innerText = "btnCが押された";
// }

const btn = document.getElementsByClassName("btn");
const result = document.getElementById("result");

function msg(e){
  result.innerText = `${e.target.innerText}が押された`;
}

for (let i=0; i<btn.length; i++){
  btn[i].onclick = msg;
}