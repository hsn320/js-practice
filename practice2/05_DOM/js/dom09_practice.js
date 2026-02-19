const small = document.getElementById("btn-small");
const large = document.getElementById("btn-large");
const wrap = document.getElementById("wrap");

let fontSize = 16;
wrap.style.fontSize = fontSize + "px";

small.onclick = () =>{
    fontSize -= 2;
    wrap.style.fontSize = fontSize + "px";
}
large.onclick = () =>{
    fontSize += 2;
    wrap.style.fontSize = fontSize + "px";
}