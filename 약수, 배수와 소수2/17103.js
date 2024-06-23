// 문제
// 골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
// 짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 N은 짝수이고, 2 < N ≤ 1,000,000을 만족한다.

// 출력
// 각각의 테스트 케이스마다 골드바흐 파티션의 수를 출력한다.

/**
 * 해결법 1
 * 2보다 큰 짝수는 두 소수의 합으로 나타낼수 있다.
 * 1. 주어진 숫자로 소수들을 구하자. 각각 구하는거야 -> 에라토스테네스로 구할수 있다.
 * 2. 구한 소수들을 하나씩 서로 더해서 주어진 숫자가 나오면 count++;
 * 3. input의 다음 숫자로 넘어가서 1,2반복
 * * 중복 가능하다. 3+3 = 6
 * ! 시간초과 발생했다. 너무 반복한다.
 *
 * 해결법 2
 * 가장 큰수를 기준으로 소수를 구한다.
 */

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
let number = input.map(Number);
let answer = [];
let maxNum = Math.max(...number);
let sleve = Array.from({ length: maxNum + 1 }, () => true);
sleve[0] = false;
sleve[1] = false;

for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  if (sleve[i]) {
    for (let j = 2; j <= maxNum / i; j++) {
      sleve[i * j] = false;
    }
  }
}

console.log(sleve);
// 6 8 10 12 100 반복
for (let n of number) {
  console.log(`${n} 찾기 시작`);

  let count = 0;
  for (let i = 2; i <= n / 2; i++) {
    console.log(sleve[i], sleve[n - i]);
    if (sleve[i] && sleve[n - i]) {
      count++;
      console.log(`count 증가.. 현재 count : ${count}`);
    }
  }
  answer.push(count);
}
// console.log(answer.join("\n"));

// const input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// input.shift();
// const arr = input.map(Number);
// const max = Math.max(...arr);
// const primes = new Set();
// const answer = [];

// eratos(max).forEach((v, i) => {
//   if (v === true) primes.add(i);
// });

// arr.forEach((n) => {
//   let count = 0;
//   //   console.log(`${n} 찾기 시작`);
//   primes.forEach((i) => {
//     if (i > n) return false;

//     primes.forEach((j) => {
//       if (j < i) return false;
//       if (j > n) return false;
//       //   console.log(i, j);
//       if (i + j === n) {
//         count++;
//         // console.log(`count 증가.. 현재 count : ${count}`);
//       }
//     });
//   });
//   answer.push(count);
// });

// console.log(answer.join("\n"));

// function eratos(n) {
//   let arr = Array(n + 1)
//     .fill(true)
//     .fill(false, 0, 2);

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         arr[j] = false;
//       }
//     }
//   }
//   return arr;
// }
