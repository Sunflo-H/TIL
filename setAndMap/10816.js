/**
 * 문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.
 */

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

// const [N, cardStr, M, matchCardStr] = input;
// const cards = cardStr.split(" ");
// const matchCards = matchCardStr.split(" ");

// let cardCount = new Map();

// cards.forEach((card) => {
//   if (cardCount.has(card)) {
//     cardCount.set(card, cardCount.get(card) + 1);
//   } else {
//     cardCount.set(card, 1);
//   }
// });
// console.log(cardCount);

// let answer = matchCards.map((card) => cardCount.get(card) || 0);
// console.log(answer.join(" "));

const cards = input[1].split(" ").map(Number);
const matchCards = input[3].split(" ").map(Number);

let map_matchCards = new Map();
matchCards.forEach((card) => {
  map_matchCards.set(card, 0);
});

cards.forEach((card) => {
  if (map_matchCards.has(card)) {
    map_matchCards.set(card, map_matchCards.get(card) + 1);
  }
});
console.log(map_matchCards);

let answer = matchCards.map((card) => map_matchCards.get(card));
console.log(answer.join(" "));

/**
 * 가지고있는게 6 3 2 10 10 10 -10 -10 7 3
 * 각각 몇개를 가지고 있는지 확인해야 할것 '10 9 -5 2 3 4 5 -10'
 *
 * 확일해야할 숫자들을
 * 10 : 0
 * 9 : 0
 * -5 : 0
 * 이런식으로 해서 Map을 만들어
 * map.has를 사용해서 Key를 조회해 일치하는 키가 있으면 그 키의 값을 1 증가
 *
 *
 */
