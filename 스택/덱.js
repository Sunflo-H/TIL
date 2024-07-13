class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push_front(data) {
    const newNode = new Node(data);
    if (this.is_empty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size += 1;
  }

  push_back(data) {
    const newNode = new Node(data);
    if (this.is_empty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size += 1;
  }

  pop_front() {
    if (this.is_empty()) {
      console.log("Deque is empty");
      return null;
    }
    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null;
    }
    this.size -= 1;
    return removedNode.data;
  }

  pop_back() {
    if (this.is_empty()) {
      console.log("Deque is empty");
      return null;
    }
    const removedNode = this.rear;
    this.rear = this.rear.prev;
    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null;
    }
    this.size -= 1;
    return removedNode.data;
  }

  peek_front() {
    if (this.is_empty()) {
      return null;
    }
    return this.front.data;
  }

  peek_back() {
    if (this.is_empty()) {
      return null;
    }
    return this.rear.data;
  }

  is_empty() {
    return this.size === 0;
  }

  get_size() {
    return this.size;
  }
}

const deque = new Deque();

// 앞쪽에 삽입
deque.push_front(10);
deque.push_front(20);

// 뒤쪽에 삽입
deque.push_back(30);
deque.push_back(40);

console.log(deque.peek_front()); // 20
console.log(deque.peek_back()); // 40

console.log(deque.pop_front()); // 20
console.log(deque.pop_back()); // 40

console.log(deque.peek_front()); // 10
console.log(deque.peek_back()); // 30

console.log(deque.get_size()); // 2
console.log(deque.is_empty()); // false
