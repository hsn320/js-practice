const time = Number(prompt());

if(time < 0 || time > 24){
    console.log("そんな時間はありません")
}
else if(time >= 1 && time <= 6){
    console.log("おやすみなさい")
}
else if(time >= 7 && time <= 11){
    console.log("おはようございます")
}
else if(time == 12){
    console.log("お昼ごはん")
}
else if(time >= 13 && time <= 17){
    console.log("こんにちは")
}
else if(time >= 18 && time <= 24){
    console.log("こんばんは")
}