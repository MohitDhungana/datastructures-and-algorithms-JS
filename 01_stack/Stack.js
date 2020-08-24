console.clear();
class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(element) {
    this.top++;
    this.stack[this.top] = element;
    console.log(`pushing ${element} to stack`);
    console.log(`Current stack is: ${this.stack}`);
  }

  pop() {
    if (!this.isEmpty()) {
      console.log(`Popping element ${this.stack[this.top]}`);
      this.stack.pop();
      this.top--;
      console.log(`Current stack is: ${this.stack}`);
    } else {
      console.log('Cannot pop, stack is empty');
    }
  }

  isEmpty() {
    return this.top < 0;
  }
}

// Implementation

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.pop();
// stack.pop();
// stack.pop();

export default Stack;
