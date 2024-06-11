const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ");

let pokedex = input.slice(0, N);
let quest = input.slice(N);
console.log(quest);
let numToName = new Map();
let nameToNum = new Map();

pokedex.forEach((name, index) => {
  numToName.set(index + 1, name);
  nameToNum.set(name, index + 1);
});

let answer = [];

quest.forEach((q) => {
  if (isNaN(q)) answer.push(nameToNum.get(q)); // 문자일때
  else answer.push(numToName.get(+q));
});

console.log(answer.join("\n"));
