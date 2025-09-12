const arr = ["HTML","CSS","JavaScript","Pug","Sass","TypeScript"];
const skill = document.getElementById("skill");
let count = 0;

const timer = setInterval(()=>{
    if(count < arr.length){
        skill.innerHTML += `<li>${arr[count]}</li>`;
        count++
    }
    else{
        return false;
    }
},3000);