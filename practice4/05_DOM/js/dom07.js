const text = document.getElementById("item_name");
const size = document.getElementById("size");

const btn = document.getElementById("btn");

const order = document.getElementById("orderlist")

btn.onclick = () => {
    order.innerHTML = `<li>${size.value}サイズ：${text.value}</li>`;
}