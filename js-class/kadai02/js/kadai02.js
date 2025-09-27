document.querySelector("#box1-bg-btn").addEventListener("click", function() {
    const color = document.querySelector("#set-bg-txt").value;
    document.querySelector("#box1").style.backgroundColor = color;
});

document.querySelector("#box2-color-btn").addEventListener("click",function(){
    const Color = document.querySelector("#set-color-txt").value;
    document.querySelector("#box2-text").style.color = Color;
});

document.querySelector("#box3-font-size-btn").addEventListener("click",function(){
    const size = document.querySelector("#set-font-size-txt").value;
    document.querySelector("#box3-text").style.fontSize = size;
});

document.querySelector("#box4-border-btn").addEventListener("click",function(){
    const border = document.querySelector("#set-border-txt").value;
    document.querySelector("#box4").style.border = border;
});