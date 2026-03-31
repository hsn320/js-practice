// 取得フォーム
const school = document.getElementById("school");

// 出力ボタン
const btn = document.getElementById("btn");

// 出力先
const text = document.getElementById("text");

btn.onclick = () => {
    text.innerHTML = school.value;
}