/**
 * 문제
자연수를 원소로 갖는 공집합이 아닌 두 집합 A와 B가 있다. 이때, 두 집합의 대칭 차집합의 원소의 개수를 출력하는 프로그램을 작성하시오. 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합이라고 한다.

예를 들어, A = { 1, 2, 4 } 이고, B = { 2, 3, 4, 5, 6 } 라고 할 때,  A-B = { 1 } 이고, B-A = { 3, 5, 6 } 이므로, 대칭 차집합의 원소의 개수는 1 + 3 = 4개이다.

입력
첫째 줄에 집합 A의 원소의 개수와 집합 B의 원소의 개수가 빈 칸을 사이에 두고 주어진다. 둘째 줄에는 집합 A의 모든 원소가, 셋째 줄에는 집합 B의 모든 원소가 빈 칸을 사이에 두고 각각 주어진다. 각 집합의 원소의 개수는 200,000을 넘지 않으며, 모든 원소의 값은 100,000,000을 넘지 않는다.

출력
첫째 줄에 대칭 차집합의 원소의 개수를 출력한다.
 */

// 1. A - B 구해
//  어떻게?
//  A를 순회하면서 B와 일치하지 않는것을 제거
/**
 let A-B = []
 setA.has(B값들) A-B.push(A=B 일치하지않는 A값)
 */
// 2. B - A 구해
// 3. 개수를 더해서 출력

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
const A = new Set(input[1].split(" ").map(Number));
const B = new Set(input[2].split(" ").map(Number));

B.forEach((num) => {
  if (A.has(num)) N--;
});

A.forEach((num) => {
  if (B.has(num)) M--;
});

console.log(N + M);

// 1 2 4
// 2 3 4 5 6

// 1 2 3 4 5 6
