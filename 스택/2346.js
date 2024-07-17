// 문제
// 1번부터 N번까지 N개의 풍선이 원형으로 놓여 있고. i번 풍선의 오른쪽에는 i+1번 풍선이 있고, 왼쪽에는 i-1번 풍선이 있다. 단, 1번 풍선의 왼쪽에 N번 풍선이 있고, N번 풍선의 오른쪽에 1번 풍선이 있다. 각 풍선 안에는 종이가 하나 들어있고, 종이에는 -N보다 크거나 같고, N보다 작거나 같은 정수가 하나 적혀있다. 이 풍선들을 다음과 같은 규칙으로 터뜨린다.

// 우선, 제일 처음에는 1번 풍선을 터뜨린다. 다음에는 풍선 안에 있는 종이를 꺼내어 그 종이에 적혀있는 값만큼 이동하여 다음 풍선을 터뜨린다. 양수가 적혀 있을 경우에는 오른쪽으로, 음수가 적혀 있을 때는 왼쪽으로 이동한다. 이동할 때에는 이미 터진 풍선은 빼고 이동한다.

// 예를 들어 다섯 개의 풍선 안에 차례로 3, 2, 1, -3, -1이 적혀 있었다고 하자. 이 경우 3이 적혀 있는 1번 풍선, -3이 적혀 있는 4번 풍선, -1이 적혀 있는 5번 풍선, 1이 적혀 있는 3번 풍선, 2가 적혀 있는 2번 풍선의 순서대로 터지게 된다.

// 입력
// 첫째 줄에 자연수 N(1 ≤ N ≤ 1,000)이 주어진다. 다음 줄에는 차례로 각 풍선 안의 종이에 적혀 있는 수가 주어진다. 종이에 0은 적혀있지 않다.

// 출력
// 첫째 줄에 터진 풍선의 번호를 차례로 나열한다.

const input = require("fs").readFileSync("input.txt").toString().trim();
const [N, str] = input.split("\n");
const arr = str.split(" ").map(Number);

// * 이거는 node.js 로 못푸나봐 답이 한개도 없다..

// ! 해결법 1 덱 사용 (메모리 초과)
// class Node {
//   static index = 1;
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//     this.index = Node.index++;
//   }
// }

// class Deque {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//     this.size = 0;
//   }

//   push(data) {
//     const newNode = new Node(data);
//     if (this.isEmpty()) {
//       this.front = this.rear = newNode;
//     } else {
//       newNode.prev = this.rear;
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }
//     this.size++;
//   }
//   push_node(newNode) {
//     if (this.isEmpty()) {
//       this.front = this.rear = newNode;
//     } else {
//       newNode.prev = this.rear;
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }
//     this.size++;
//   }
//   unshift_node(newNode) {
//     if (this.isEmpty()) {
//       this.front = this.rear = newNode;
//     } else {
//       newNode.next = this.front;
//       this.front.prev = newNode;
//       this.front = newNode;
//     }
//     this.size++;
//   }
//   pop_node() {
//     if (this.isEmpty()) return null;
//     const removedNode = this.rear;

//     this.rear = this.rear.prev;
//     if (this.rear) {
//       this.rear.next = null;
//     } else {
//       this.front = null;
//     }
//     this.size--;
//     return removedNode;
//   }

//   shift_node() {
//     if (this.isEmpty()) return null;
//     const removedNode = this.front;

//     this.front = this.front.next;
//     if (this.front) {
//       this.front.prev = null;
//     } else {
//       this.rear = null;
//     }
//     this.size--;
//     return removedNode;
//   }

//   isEmpty() {
//     return this.front === null ? 1 : 0;
//   }

//   peek_front() {
//     return this.front.data;
//   }

//   getIndex() {
//     return this.front.index;
//   }
// }

// const deque = new Deque();

// arr.forEach((number) => {
//   deque.push(number);
// });

// const answer = [];
// arr.forEach((number) => {
//   answer.push(deque.getIndex());

//   const n = deque.shift_node().data;

//   let count = n > 0 ? Math.abs(n - 1) : Math.abs(n);
//   for (let i = 0; i < count; i++) {
//     let node = deque.shift_node();
//     deque.push_node(node);
//   }
// });

// console.log(answer.join(" "));
