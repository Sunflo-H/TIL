// 문제
// 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다.
// 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다.
// 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다.
// 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다.

// 여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다.

// 입력
// 입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다.
// 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다.

// 출력
// 출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다.

// 포인트
// - 길이는 짝수가 되야해 (1차적으로 걸러서 속도 향상 기염)
//// - 열린만큼 닫힌게 있어야한다. (X) 닫힘 열림 순서면 안돼
// - stack을 이용한단 말이지.
//  "(" => count ++
//  count가 1이상이고, ")" => count --
//  최종적으로 count = 0 이면 "YES"

//  count가 0인데 ")" 오면 바로 "NO"
//! 일단 이렇게는 정답이긴 한데... 스택스럽게 풀지 못한것 같다.
//! 아 count대신 stack으로 push pop 하면 되는거네!
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
let arr = input
  .map((str) => str.replace(/\n|\r|\s*/g, ""))
  .map((str) => str.split(""));

let answer = [];
outerLoop: for (let i = 0; i < N; i++) {
  if (arr[i].length % 2 !== 0) {
    answer.push("NO");
    continue;
  }

  let count = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "(") {
      count++;
    } else if (arr[i][j] === ")") {
      if (count === 0) {
        answer.push("NO");
        continue outerLoop;
      }

      count--;
    }
  }
  if (count === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
}
console.log(answer.join("\n"));
