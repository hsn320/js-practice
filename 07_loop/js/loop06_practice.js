const fruit = [
    { name: 'りんご', price: 180},
    { name: 'バナナ', price: 460},
    { name: 'キウイ', price: 400},
    { name: 'レモン', price: 200},
];
const total = document.getElementById("total");

const result = fruit.reduce((prev,current) => prev+current.price,0);

console.log(result);
total.innerText = `${result}円`