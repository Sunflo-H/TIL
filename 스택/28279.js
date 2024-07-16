// 문제
// 정수를 저장하는 덱을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여덟 가지이다.

// 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
// 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
// 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 5: 덱에 들어있는 정수의 개수를 출력한다.
// 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
// 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 입력
// 첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

// 둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.

// 출력을 요구하는 명령은 하나 이상 주어진다.

// 출력
// 출력을 요구하는 명령이 주어질 때마다 명령의 결과를 한 줄에 하나씩 출력한다.

const input = require("fs").readFileSync("input.txt").toString().trim();
const [N, ...arr] = input.split("\n");
const answer = [];

class Node {
  constructor(v) {
    this.next = null;
    this.value = v;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // 덱의 앞에 넣는다.
  unshift(v) {
    const newNode = new Node(v);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }
  // 맨 앞의 데이터를 뺀다.
  shift() {
    if (this.isEmpty()) {
      return -1;
    }

    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null;
    }

    this.size--;
    return removedNode.value;
  }

  // 덱의 뒤에 넣는다.
  push(v) {
    const newNode = new Node(v);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // 맨 뒤의 정수를 뺀다.
  pop() {
    if (this.isEmpty()) return -1;
    const removedNode = this.rear;

    this.rear = this.rear.prev;
    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null;
    }
    this.size--;
    return removedNode.value;
  }

  peek_front() {
    if (this.isEmpty()) return -1;
    return this.front.value;
  }

  peek_rear() {
    if (this.isEmpty()) return -1;
    return this.rear.value;
  }

  isEmpty() {
    return this.front === null ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

const deque = new Deque();

arr.forEach((str, index) => {
  const [command, number] = str.split(" ").map(Number);

  switch (command) {
    case 1:
      deque.unshift(number);
      break;
    case 2:
      deque.push(number);
      break;
    case 3:
      answer.push(deque.shift());
      break;
    case 4:
      answer.push(deque.pop());
      break;
    case 5:
      answer.push(deque.getSize());
      break;
    case 6:
      answer.push(deque.isEmpty());
      break;
    case 7:
      answer.push(deque.peek_front());
      break;
    case 8:
      answer.push(deque.peek_rear());
      break;
  }
});
console.log(answer.join("\n"));
