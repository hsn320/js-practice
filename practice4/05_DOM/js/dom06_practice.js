// select id
const main = document.getElementById("main");
const sub = document.getElementById("sub");
const soup = document.getElementById("soup");
const side = document.getElementById("side");

// ボタン
const submit = document.getElementById("submit");

// 出力先
const menu = document.getElementById("menu");

submit.onclick = () => {
    menu.innerHTML = `注文内容は${main.value}、${sub.value}、${soup.value}、${side.value}です。`
}