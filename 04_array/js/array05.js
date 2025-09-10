let nameList = ["tanaka","takimoto","sakakura","momoi","miyazaki"];
console.log(nameList);
//先頭のデータを削除
nameList.shift();
console.log(nameList);
//先頭にデータを追加
nameList.unshift("watanabe");
console.log(nameList);

let word = ["apple","gorilla","trumpet","bread"];
console.log(word);

word.unshift("light");
console.log(word);

word.shift();
console.log(word);