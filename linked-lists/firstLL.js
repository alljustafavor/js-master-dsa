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
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index < 0) return console.log("enter vaild index");
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const sub = leader.next;

    leader.next = node;
    node.next = sub;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      let sub = this.head.next.next;
      this.head = this.head.next;
      this.head.next = sub;
      this.length--;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    if (index < 0) return console.log("enter vaild index");
    if (index > this.length) return console.log("index too large");

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const joesLinkedList = new LinkedList(10);
joesLinkedList.append(5);
joesLinkedList.append(16);
joesLinkedList.prepend(1);
joesLinkedList.insert(2, 99);
joesLinkedList.insert(5, 100);
joesLinkedList.remove(2);
joesLinkedList.remove(2);
joesLinkedList.reverse();
console.log(joesLinkedList.printList());
