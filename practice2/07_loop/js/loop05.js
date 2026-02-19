const fruit = [
  { name: 'apple', price: 180 },
  { name: 'banana', price: 230 },
  { name: 'lemon', price: 200 },
  { name: 'peach', price: 480 },
  { name: 'kiwi', price: 80 },
  { name: 'mango', price: 680 }
];
const out = document.getElementById("out");
const result = fruit.reduce((prev,current) => prev + current.price,0);

console.log(result);
out.innerText = `${result}円`;