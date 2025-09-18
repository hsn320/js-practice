const Name = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const list = document.getElementById("orderlist");

btn.onclick = () =>{
    list.innerText = `${size.value}サイズ：${Name.value}`
}