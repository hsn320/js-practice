// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random()*6);

let omikugi = ["大吉","中吉","小吉","吉","凶","大凶"];
console.log(omikugi);

switch(no){
    case 0:
        console.log(omikugi[0] + "ですおめでとう！");
        break;
    case 1:
        console.log(omikugi[1] + "ですラッキー！");
        break;
    case 2:
        console.log("コメントに困る" + omikugi[2] + "です");
        break;
    case 3:
        console.log(omikugi[3] + "です");
        break;
    case 4:
        console.log(omikugi[4] + "ですアンラッキー");
        break;
    case 5:
        console.log(omikugi[5] + "です残念・・・");
        break;
}