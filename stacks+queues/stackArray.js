class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  isEmpty() {
    return !this.length ? true : false;
  }
}

const myStack = new Stack();
myStack.push("gooogle");
myStack.push("udemy");
myStack.push("uber");
myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);
