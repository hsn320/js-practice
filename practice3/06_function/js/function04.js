const num = document.getElementById("num");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

function setpx(Num){
    return(`${Num}px`);
}
btn.onclick = () =>{
    input.innerHTML = num.value;
    result.innerHTML = setpx(num.value);
}