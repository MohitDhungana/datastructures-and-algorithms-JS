class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prevNode = this.getByIndex(index - 1);
    if (prevNode == null) return null;

    prevNode.nextNode = new Node(value, prevNode.nextNode);
    this.length++;
  }

  removeHead() {
    this.head = this.head.nextNode;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prevNode = this.getByIndex(index - 1);
    if (prevNode == null) return null;

    prevNode.nextNode = prevNode.nextNode.nextNode;
    this.length--;
  }

  // print() {
  //   let output = '';
  //   let currentNode = this.head;
  //   while (currentNode) {
  //     output = `${output}${currentNode.value} --> `;
  //     currentNode = currentNode.next;
  //   }
  //   console.log(`${output}null`);
  // }
}

// helper function to create linked list for ease of testing
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
