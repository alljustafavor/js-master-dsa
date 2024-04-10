class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    return this.data.push(value);
  }

  pop() {
    return this.data.pop();
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
