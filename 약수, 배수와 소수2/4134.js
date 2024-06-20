// 문제
// 정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.

// 출력
// 각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();
let arr = [...input];
let answer = [];

// 주어진 숫자가 소수인지 판별
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 소수라면 answer에 추가, 아니라면 1씩 증가 => 반복
while (arr.length !== 0) {
  if (isPrime(arr[0])) {
    answer.push(arr[0]);
    arr.shift();
  } else {
    arr[0]++;
  }
}

console.log(answer.join("\n"));

// 첫번째 풀이 시간초과
// // 소수인지 확인하는 함수
// function isSOSU(num) {
//   if (num === 1) return false;
//   for (let i = 2; i < num / 2; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// let count = 0;

// while (!isSOSU(Math.max(...input) + count)) {
//   count++;
// }

// let biggestPrime = Math.max(...input) + count; // 가장 큰 소수를 구해

// let primes = new Set();
// let set = new Set();

// // 가장 큰 소수이하의 소수들을 구하는 함수
// function getPrimes(biggestPrime) {
//   for (let i = 0; i < biggestPrime; i++) {
//     set.add(i + 1);
//   }

//   set.forEach((num) => {
//     isSOSU(num) ? primes.add(num) : null;
//   });
// }

// getPrimes(biggestPrime);

// input.forEach((num) => {
//   let isEnd = false;
//   primes.forEach((prime) => {
//     if (isEnd) {
//       return false;
//     }
//     if (num < prime) {
//       answer.push(prime);
//       isEnd = true;
//     }
//   });
// });
// console.log(answer.join("\n"));
