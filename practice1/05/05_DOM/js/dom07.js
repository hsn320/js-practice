const item_name = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const orderlist = document.getElementById("orderlist");

btn.onclick = () => {
    orderlist.innerHTML += `<li>${size.value}サイズ：${item_name.value}</li>`
}