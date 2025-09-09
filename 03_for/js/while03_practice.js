let wallet = 12800;
let price = 980;
let count = 0;

while(wallet >= price){
    count++;
    wallet -= price;
    console.log(count + "回目の買い物成功。残金は" + wallet + "円")
    if(count >= 5){
        price= 750;
    }
}
console.log("買い物終了" + count + "個買えた");