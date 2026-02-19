const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const out = document.getElementById("out");

let time;
let num = 0;

startBtn.onclick = () => {
    if(!time){
        time = setInterval(() => {
            num++
            out.innerText = num;
        },1000);
    }
}
stopBtn.onclick = () => {
    clearInterval(time);
    time = null;
}
resetBtn.onclick = () =>{
    clearInterval(time);
    time = null;
    num = 0;
    out.innerText = num;
}