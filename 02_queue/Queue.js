console.clear();
class Queue {
  constructor() {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    this.front === -1 ? true : false;
  }

  enqueue(item) {
    console.log(`enqueueing ${item} to queue`);

    if (this.front === -1) {
      this.front = 0;
    }
    this.rear++;
    this.queue[this.rear] = item;
    console.log('current queue is', this.queue);
    console.log('front ', this.front);
    console.log('rear ', this.rear);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      const element = this.queue.splice(this.front, 1);
      this.front++;

      console.log(`removed ${element} from queue`);
      console.log('current queue is', this.queue);
      if (this.front > this.rear) {
        // reset queue
        this.front = -1;
        this.rear = -1;
        console.log('queue is now empty and it has been reset');
      }
    }
    console.log('front ', this.front);

    console.log('rear ', this.rear);
  }
}

const q = new Queue();
q.enqueue(2);
q.enqueue(10);
q.dequeue();
q.dequeue();
