const num = document.getElementById("num");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

function setpx(set){
    return set + ("px")
}

btn.onclick = () => {
    input.innerHTML = num.value;
    result.innerHTML = setpx(num.value);
}