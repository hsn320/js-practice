const start = document.getElementById("startBtn");
const Stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");
const out = document.getElementById("out");

let time;
let num = 0;

start.onclick = () => {
    if(!time){
        time = setInterval(() => {
            num++
            out.innerText = num;
        },1000);
    }
}
Stop.onclick = () => {
    clearInterval(time);
    time = null;
}
reset.onclick = () => {
    clearInterval(time);
    time = null;
    num = 0;
    out.innerText = num;
}