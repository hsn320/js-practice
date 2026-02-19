const school = document.getElementById("school");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.onclick = () =>{
    text.innerText = school.value;
}