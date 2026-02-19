const btn = document.getElementsByClassName("changeBtn");
const bg = document.getElementById("bg");

for(let i=0; i<btn.length; i++){
    btn[i].onclick = (e) =>{
        bg.style.backgroundColor = e.target.innerText;
    }
}