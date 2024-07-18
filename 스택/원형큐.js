class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
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

queue.enqueue(10);
console.log(queue);
queue.enqueue(20);
console.log(queue);
queue.enqueue(30);
console.log(queue);
