const menu = [
  "唐揚げ定食",
  "焼き魚定食",
  "酢豚定食",
  "ステーキ定食",
  "カツカレー定食",
];
const Menu = document.getElementById("menu");

menu.forEach( e => {
  const li = document.createElement("li");
  li.textContent = e;
  Menu.appendChild(li);
});

// createElement　jsで新しいhtml要素を作る
// ↪︎タグを書いても文字として表示される
// textContent html要素の中にあるテキストを読み取ったり書き換えたりできるプロパティ