class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdPtr = this.top;
      this.top = node;
      this.top.next = holdPtr;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.top === null) return this;
    if (this.top === this.bottom) return (this.bottom = null);
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length ? true : false;
  }
}

const myStack = new Stack();
myStack.push("gooogle");
myStack.push("udemy");
myStack.push("uber");
myStack.pop();
myStack.peek();
myStack.isEmpty();
