class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    let newNode = new Node(data, this.head);
    if (this.length == 0) {
      this.head = newNode;
      newNode.nextNode = newNode;
    } else {
      let prevHead = this.getByIndex(this.length - 1);
      this.head = newNode;
      prevHead.nextNode = this.head;
    }

    this.length++;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.insertAtHead(data);
    let prevNode = this.getByIndex(index - 1);
    if (prevNode == null) return null;

    prevNode.nextNode = new Node(data, prevNode.nextNode);
    this.length++;
  }

  // insertAtEnd(value) {
  //   lastNode=this.getByIndex(this.length-1)

  // }

  removeHead() {
    if (this.length <= 0) return null;

    let lastNode = this.getByIndex(this.length - 1);
    lastNode.nextNode = this.head.nextNode;
    this.head = this.head.nextNode;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    if (index < 0 || index > this.length - 1) return null;

    let prevNode = this.getByIndex(index - 1);
    prevNode.nextNode = prevNode.nextNode.nextNode;
    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
}

CircularLinkedList.fromValues = function (...values) {
  const cc = new CircularLinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    cc.insertAtHead(values[i]);
  }
  return cc;
};

module.exports = CircularLinkedList;
