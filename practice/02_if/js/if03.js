const wallet = 3000;

let itemA = prompt();
itemA = Number(itemA);

if(wallet > itemA){
    console.log("購入することができます。")
}
else if(wallet == itemA){
    console.log("ピッタリです");
}
else{
    console.log("購入することができません。");
}