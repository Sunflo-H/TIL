// 문제
// N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

// 이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다.
// 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

// 예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

// N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

// 출력
// 첫째 줄에 남게 되는 카드의 번호를 출력한다.

// ! 해결법 - 시간초과
// 일단 반복을 만들어보자
// 1. arr.shift();
// 2. let bottom = arr.shift();
// 3. arr.push(bottom);
// 이거를 arr.length === 1일 때까지 반복하고 하나남은 숫자 출력

// * 링크드 리스트를 사용해야 한다.

const input = require("fs").readFileSync("input.txt").toString().trim();

class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    // head에 값이 없으면
    if (!this.head) {
      this.head = newNode; // head에 node 저장
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.size += 1;
    // return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();

for (let i = 0; i < Number(input); i++) list.push(i + 1);

while (list.getSize() !== 1) {
  list.removeHead();
  list.push(list.getHead());
  list.removeHead();
}
console.log(list.getHead());
