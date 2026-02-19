const L = document.getElementById("btnL");
const S = document.getElementById("btnS");
const text = document.getElementById("text");

L.onclick = () =>{
    text.style.fontSize = "80px";
}
S.onclick = () =>{
    text.style.fontSize = "20px";
}