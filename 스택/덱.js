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
    const newNode = new Node(data); // {prev = null, v= 20, next=null}
    if (this.is_empty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front; // 맨 뒤에 오는 새 노드의 next는 당연히 기존의 front에 해당하는 값이지
      // console.log("");
      // console.log("newNode : ", newNode);
      // console.log("front : ", this.front);
      // console.log("rear : ", this.rear);
      // console.log(" ");
      this.front.prev = newNode; // 이때 newNode.prev = this.front 코드에 의해 this.front.prev = newNode.prev.prev 를 의미한다. 주소가 같아지는듯.
      // 그래서 이렇게 봐도돼 this.front.prev = newNode.prev.prev = newNode 이렇게 두개 다 newNode 값이 저장된다.
      // console.log("");
      // console.log("newNode : ", newNode);
      // console.log("front : ", this.front);
      // console.log("rear : ", this.rear);
      // console.log(" ");
      this.front = newNode; // 근데 이때는 또 새로운 주소야 newNode.prev = this.front 이 코드에 의해 영향을 받지 않아
      // console.log("");
      // console.log("newNode : ", newNode);
      // console.log("front : ", this.front);
      // console.log("rear : ", this.rear);
      // console.log(" ");
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
    console.log("");
    console.log("front : ", this.front);
    console.log("rear : ", this.rear);
    console.log(" ");
    if (this.front) {
      console.log("1");
      this.front.prev = null;
      console.log("");
      console.log("front : ", this.front);
      console.log("rear : ", this.rear);
      console.log(" ");
    } else {
      console.log("2");
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
console.log(deque);
deque.push_front(20);
console.log(deque);
deque.pop_front();
console.log(deque);
// deque.pop_front();
// console.log(deque);

// 뒤쪽에 삽입
// deque.push_back(30);
// deque.push_back(40);
