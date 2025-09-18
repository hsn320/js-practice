const Btn = document.getElementsByClassName("changeBtn");
const bg = document.getElementById("bg");

for(let i=0; i<Btn.length; i++){
    Btn[i].onclick = (evt) =>{
        bg.style.backgroundColor = evt.target.innerText;
    }
}