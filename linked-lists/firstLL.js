// Linked List 10->5->16

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
// console.log(myLinkedList);

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // setting head and tail to be at the same starting "index"
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

const joesLinkedList = new LinkedList(10);
joesLinkedList.append(5);
joesLinkedList.append(16);
console.log(joesLinkedList);
