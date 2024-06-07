/**
 * 문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

입력
첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

좌표 압축 : 주어진 좌표 [X1,X2,X3,X4,X5...] 중 X1의 압축 = X1보다 작은 X값들
 */

// 오름차순 정렬 -> 중복 제거 -> 배열에서 X1의 인덱스를 찾고 answer에 저장
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

let xArr = input[0].split(" ").map((x) => +x);

let xSet = new Set(xArr);

let uniq = [...xSet].sort((a, b) => a - b);

// * 객체화를 해야 시간초과가 안걸린다.
let obj = {};

uniq.forEach((v, i) => {
  obj[v] = i;
});

let answer = "";
for (let i = 0; i < N; i++) {
  answer += obj[xArr[i]] + " ";
}
console.log(answer);

// !시간 초과 풀이
// xs.forEach((x) => {
//   answer += xs_set.findIndex((v) => v == x) + " ";
// });

// console.log(answer);
