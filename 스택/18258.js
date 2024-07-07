// 문제
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// 입력
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 2,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

// 출력
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

// 시간초과 때문에 큐를 만들었다.

const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

// class Node {
//   constructor(value) {
//     this.item = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.size = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   push(value) {
//     const node = new Node(value);
//     // head에 값이 없으면
//     if (!this.head) {
//       this.head = node; // head에 node 저장
//       this.head.next = this.tail; // head 다음은 tail 저장
//     } else {
//       // head에 값이 있으면 tail 다음에 node 저장
//       this.tail.next = node;
//     }
//     this.tail = node;
//     this.size += 1;
//     console.log("node :", node);
//     console.log("head :", this.head);
//     console.log("tail :", this.tail);
//     console.log("size :", this.size);
//   }

//   front() {
//     return this.head ? this.head.item : -1;
//   }

//   back() {
//     return this.tail ? this.tail.item : -1;
//   }

//   pop() {
//     if (this.size > 2) {
//       const item = this.head.item;
//       const newHead = this.head.next;
//       this.head = newHead;
//       this.size -= 1;
//       return item;
//     } else if (this.size === 2) {
//       const item = this.head.item;
//       const newHead = this.head.next;
//       this.head = newHead;
//       this.tail = newHead;
//       this.size -= 1;
//       return item;
//     } else if (this.size === 1) {
//       const item = this.head.item;
//       this.head = null;
//       this.tail = null;
//       this.size -= 1;
//       return item;
//     } else {
//       return -1;
//     }
//   }

//   empty() {
//     return this.size === 0 ? 1 : 0;
//   }
// }

// const queue = new Queue();
// let result = "";
// for (let i = 0; i < N; i++) {
//   let input = inputs[i].split(" ");
//   switch (input[0]) {
//     case "push":
//       queue.push(+input[1]);
//       break;
//     case "front":
//       result += queue.front() + "\n";
//       break;
//     case "back":
//       result += queue.back() + "\n";
//       break;
//     case "size":
//       result += queue.size + "\n";
//       break;
//     case "empty":
//       result += queue.empty() + "\n";
//       break;
//     case "pop":
//       result += queue.pop() + "\n";
//       break;
//   }
// }

// console.log(result.split("").join(""));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // head
    this.rear = null; // tail
  }

  // 큐에 데이터를 추가하는 메서드
  enqueue(data) {
    const newNode = new Node(data);
    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // 큐에서 데이터를 제거하고 반환하는 메서드
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return dequeuedNode.data;
  }

  // 큐의 최전방 데이터를 반환하는 메서드
  frontData() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }

  // 큐가 비어있는지 확인하는 메서드
  isEmpty() {
    return this.front === null ? 1 : 0;
  }
}
const queue = new Queue();
