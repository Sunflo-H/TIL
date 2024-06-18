// 문제
// 분수 A/B는 분자가 A, 분모가 B인 분수를 의미한다. A와 B는 모두 자연수라고 하자.

// 두 분수의 합 또한 분수로 표현할 수 있다. 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.

// 입력
// 첫째 줄과 둘째 줄에, 각 분수의 분자와 분모를 뜻하는 두 개의 자연수가 순서대로 주어진다. 입력되는 네 자연수는 모두 30,000 이하이다.

// 출력
// 첫째 줄에 구하고자 하는 기약분수의 분자와 분모를 뜻하는 두 개의 자연수를 빈 칸을 사이에 두고 순서대로 출력한다.

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [nums1, nums2] = input.map((item) => item.split(" ").map(Number));

let calc = [nums1[0] * nums2[1] + nums2[0] * nums1[1], nums1[1] * nums2[1]];

function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}
let GCD = gcd(calc[0], calc[1]);
console.log(calc);
console.log(GCD);
while (calc[0] % GCD === 0 && GCD !== 1) {
  calc = calc.map((num) => num / GCD);
}
console.log(calc);

// 5 19
// 18 195
