/**
 * 문제
 * 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 *
 * 입력
 * 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
 *
 * 출력
 * 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.
 *
 * [ [ 3, 4 ], [ 1, 1 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = Number(input.shift());
console.log(input);
const xy = input.filter((v, i) => i >= 0).map((v) => v.split(" "));

// const input = require("fs")
//   .readFileSync("../input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const count = input.shift();
// const xy = input.map((str) => str.split(" "));
console.log(xy);

/**
 * 두번째 코드 성공 그러나 조금 느림
 */
// const input = require("fs")
//   .readFileSync("../input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const count = input.shift();
// const arr = input.map((str) => str.split(" ").map(Number));

// arr
//   .sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0];
//     else return a[1] - b[1];
//   })
//   .forEach((item) => {
//     console.log(item[0], item[1]);
//   });

/**
 * !처음 작성한 코드  -> 시간 초과

// const input = require("fs")
//   .readFileSync("../input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const count = input.shift();
// const arr = input.map((str) => str.split(" ").map(Number));

// for (let i = 0; i < count; i++) {
//   for (let j = i + 1; j < count; j++) {
//     // x값 정렬
//     if (arr[i][0] > arr[j][0]) {
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//     // y값 정렬
//     else if (arr[i][0] === arr[j][0]) {
//       if (arr[i][1] > arr[j][1]) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
// }
 */
