/**
 * 문제
김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.

듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.

출력
듣보잡의 수와 그 명단을 사전순으로 출력한다.
 */
// 듣도 못한 사람과 보도 못한사람 겹치는 걸 찾아서
// answer에 저장하고, 개수 + answer 한줄씩 출력 , 사전순

// [1 2 3], [1 3 5] 이 두개중 겹치는걸 어떻게 찾을거냐
// map : {1:1, 2:0:, 3:1} 이건가?

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
const noHear = input.slice(0, N);
const noSee = input.slice(N);
// const noHearNoSee = new Map(); // 처음에 Map으로 풀었지만 Set으로도 할 수 있다.
const noHearNoSee = new Set(noHear); // Set으로 한 결과가 더 빠르고 코드도 짧다.
let answer = [];

// noHear.forEach((name) => {
//   noHearNoSee.set(name, 0);
// }); // Set으로 바꾸면서 주석처리한 Map 코드

noSee.forEach((name) => {
  if (noHearNoSee.has(name)) answer.push(name);
});
answer.sort();
console.log(answer.length);
console.log(answer.join("\n"));
