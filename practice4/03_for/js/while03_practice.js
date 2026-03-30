//残金
let wallet = 12800;
//価格
let price = 980;

let count = 0;

// for(let i = 1; ; i++){
//     if(i >= 5){
//         price = 750;
//     }
//     if(wallet >= price){
//         wallet -= price;
//         count++;
//         console.log(i + "回目の買い物成功。残金は" + wallet + "円");
//     }
//     else{
//         console.log("買い物終了" + count + "個買えた");
//         break;
//     }
// }

// 帰る間だけループ
while(wallet >= price){
    count++;
    wallet -= price;
    console.log(count + "回目の買い物成功。残金は" + wallet + "円");
    // 5回目になったら値段を変える
    if(count >= 5){
        price = 750;
    }
}
// 最後に最後に1回だけやる処理
console.log("買い物終了" + count + "個買えた");