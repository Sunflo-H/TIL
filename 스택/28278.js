// 문제
// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 입력
// 첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

// 둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.

// 출력을 요구하는 명령은 하나 이상 주어진다.

// 출력
// 출력을 요구하는 명령이 주어질 때마다 명령의 결과를 한 줄에 하나씩 출력한다.

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const answer = [];
// * 풀이1 그냥 조건문으로 구현 (성공, 스택은 이렇게 해도 시간초과가 발생하지 않았다.)
// const stack = [];
// input.forEach((strCommand) => {
//   const [command, num] = strCommand.split(" ").map(Number);

//   switch (command) {
//     case 1:
//       stack.push(num);
//       break;
//     case 2:
//       stack.length !== 0 ? answer.push(stack.pop()) : answer.push(-1); // 정수를 빼고 뺀거를 출력해
//       break;
//     case 3:
//       answer.push(stack.length);
//       break;
//     case 4:
//       stack.length === 0 ? answer.push(1) : answer.push(0);
//       break;
//     case 5:
//       stack.length !== 0
//         ? answer.push(stack[stack.length - 1])
//         : answer.push(-1);
//       break;
//   }
// });
// console.log(answer.join("\n"));

// * 풀이 2 class로 스택 구현

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.top) {
      const popData = this.top; // 반환하기 위한 변수
      this.top = this.top.next;
      this.size--;
      return popData.data; // pop은 값을 반환한다.
    } else {
      return -1;
    }
  }

  peek() {
    return this.top === null ? -1 : this.top.data;
  }

  isEmpty() {
    return this.top === null ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();
input.forEach((str) => {
  const [command, num] = str.split(" ").map(Number);

  switch (command) {
    case 1:
      stack.push(num);
      break;
    case 2:
      answer.push(stack.pop());
      break;
    case 3:
      answer.push(stack.getSize());
      break;
    case 4:
      answer.push(stack.isEmpty());
      break;
    case 5:
      answer.push(stack.peek());
      break;
  }
});

console.log(answer.join("\n"));
