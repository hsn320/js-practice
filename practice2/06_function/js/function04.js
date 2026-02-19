const num = document.getElementById("num");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

function setpx(num){
    return num + "px";
}

btn,onclick = () =>{
    input.innerText = num.value;
    result.innerText = setpx(num.value);
}