// 문제
// 요세푸스 문제는 다음과 같다.

// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

// N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 1,000)

// 출력
// 예제와 같이 요세푸스 순열을 출력한다.

// 해결법1
// 일단 while문으로 반복 -> 언제까지? answer.length === N 일 때까지
// 현재 값을 우선 let data = arr.shift()로 빼서 저장해
// 카운트로 판단할거야, count = 1, count % K === 0 인지 판단해야해
// 맞다면 => data를 answer에 저장
// 아니라면 => data를 배열의 맨 뒤에 다시 저장 (push)

const input = require("fs").readFileSync("input.txt").toString().trim();

const [N, K] = input.split(" ").map(Number);
let arr = new Array(N).fill(0);
arr.forEach((el, i) => (arr[i] = i + 1));

let answer = [];
let count = 1;
while (answer.length !== N) {
  let data = arr.shift();
  count % K === 0 ? answer.push(data) : arr.push(data);
  count++;
}
console.log(`<${answer.join(", ")}>`);
