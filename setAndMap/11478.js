/**
 * 문제
문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오.

부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다.

예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 서로 다른것의 개수는 12개이다.

입력
첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 1,000 이하이다.

출력
첫째 줄에 S의 서로 다른 부분 문자열의 개수를 출력한다.
 */
/**
 * 부분 문자열
 *
 * a b c => a b c ab bc abc 6
 * a b b c => a b b c ab bb bc abb bbc abbc 10
 * a b a b c => a b a b c ab ba ab ba bc aba bab abc abab babc ababc
 *
 * 각 문자열의 합을 전부 구하고 set 하면 일단 되긴 할거같다.
 *
 * 1. 문자열 분리해서 배열만들기 [a, b, a, b, c]
 * 2.
 */

const input = require("fs").readFileSync("input.txt").toString().trim();

// 2번째 풀이 첫번째 보다는 훨씬 빨라졌다 3배정도
let mySet = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    mySet.add(input.slice(i, j + 1));
  }
}
console.log(mySet);

// console.log(input.slice(0, 1~length)); // a ab aba abab ababc
// console.log(input.slice(1, 3));

// 1번째 풀이 시간초과는 아닌데 좀 오래 걸림
// let mySet = new Set(input);

// while (input.length !== 1) {
//   input.reduce((acc, cur) => {
//     mySet.add(acc + cur);
//     return acc + cur;
//   });
//   input.shift();
// }
// console.log(mySet.size);
