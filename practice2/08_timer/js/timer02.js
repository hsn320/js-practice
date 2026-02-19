const counter = document.getElementById("counter");
let count = 0;
const duration = 1000;

function setTimer(){
    if(count < 20){
        count++;
        counter.innerHTML += `${count}`;
        setTimeout(setTimer,duration);
    }
    else{
        return false;
    }
}
setTimeout(setTimer, duration);