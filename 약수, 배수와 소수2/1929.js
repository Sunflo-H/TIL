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
let primes = [];

function eratos(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

eratos(arr[1]).forEach((item, index) => {
  if (item) primes.push(index);
});
let answer = primes.filter((prime) => prime >= arr[0]);
console.log(answer.join("\n"));
