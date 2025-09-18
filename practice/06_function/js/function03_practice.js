const msg = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

function message(val){
    return(`あなたの入力した文字は${val}です。`);
}

btn.onclick = () => {
    out.innerText = message(msg.value);
}