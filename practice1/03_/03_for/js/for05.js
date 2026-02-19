let num = prompt();
num = Number(num);

if(num >= 1 && num <= 50){
    for(let i=1; i<=num; i++){
        console.log(i + "回目");
}
}
else if(num < 0 || num > 51){
    console.log("1~50の数値を入れてください");
}