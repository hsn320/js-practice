const btnSmall = document.getElementById("btn-small");
const btnLarge = document.getElementById("btn-large");
const wrap = document.getElementById("wrap");

let fontSize = 16;
wrap.style.fontSize = fontSize + "px";

btnSmall.onclick = () => {
    fontSize -= 2;
    wrap.style.fontSize = fontSize + "px";
}
btnLarge.onclick = () => {
    fontSize += 2;
    wrap.style.fontSize = fontSize + "px";
}