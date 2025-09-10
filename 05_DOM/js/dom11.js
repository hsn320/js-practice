const changeBtn = document.getElementsByClassName("changeBtn");
const bg = document.getElementById("bg");

for(let i=0; i<changeBtn.length; i++){
    changeBtn[i].onclick = (evt) =>{
        bg.style.backgroundColor = evt.target.innerText;
    }
}