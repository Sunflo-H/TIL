// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

let arr = input.map(Number);
let answer = [];

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = arr[0]; i < arr[1] + 1; i++) {
  isPrime(i) && answer.push(i);
}
console.log(answer.join("\n"));
