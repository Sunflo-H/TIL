class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
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
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
      this.size += 1;
    }
  
    getHead() {
      return this.head ? this.head.value : null;
    }
  
    removeHead() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.size -= 1;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  // 사용 예제
  const list = new LinkedList();
  list.push(10);
  list.push(20);
  list.push(30);
  
  console.log(list.getHead()); // 10
  console.log(list.getSize()); // 3
  
  list.removeHead();
  console.log(list.getHead()); // 20
  console.log(list.getSize()); // 2class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
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
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
      this.size += 1;
    }
  
    getHead() {
      return this.head ? this.head.value : null;
    }
  
    removeHead() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.size -= 1;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  // 사용 예제
  const list = new LinkedList();
  list.push(10);
  list.push(20);
  list.push(30);
  
  console.log(list.getHead()); // 10
  console.log(list.getSize()); // 3
  
  list.removeHead();
  console.log(list.getHead()); // 20
  console.log(list.getSize()); // 2