const S = document.getElementById("btn-small");
const L = document.getElementById("btn-large");

const wrap = document.getElementById("wrap");

let fontSize = 16;
wrap.style.fontSize = fontSize + "px";

S.onclick = () => {
    fontSize -= 2;
    wrap.style.fontSize = fontSize + "px";
}
L.onclick = () => {
    fontSize += 2;
    wrap.style.fontSize = fontSize + "px";
}