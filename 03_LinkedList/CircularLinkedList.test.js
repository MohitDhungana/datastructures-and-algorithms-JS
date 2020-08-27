const CircularLinkedList = require('./CircularLinkedList');

describe('#insertAtHead', () => {
  test('should add element at head', () => {
    const circularLinkedList = new CircularLinkedList();

    circularLinkedList.insertAtHead(20);
    expect(circularLinkedList.head.value).toBe(20);
    expect(circularLinkedList.head.nextNode.value).toBe(20);

    let oldHead = circularLinkedList.head;
    circularLinkedList.insertAtHead(30);
    expect(circularLinkedList.head.value).toBe(30);
    expect(circularLinkedList.head.nextNode).toBe(oldHead);
    expect(circularLinkedList.length).toBe(2);
    expect(oldHead.nextNode).toBe(circularLinkedList.head);

    let prevHead = circularLinkedList.head;
    circularLinkedList.insertAtHead(40);
    expect(circularLinkedList.head.value).toBe(40);
    expect(circularLinkedList.head.nextNode).toBe(prevHead);
    expect(circularLinkedList.length).toBe(3);
    expect(prevHead.nextNode.nextNode).toBe(circularLinkedList.head);
  });
});

describe('#getByIndex', () => {
  describe('when index less than zero', () => {
    test('should return null', () => {
      const circularLinkedList = CircularLinkedList.fromValues(10, 20, 30);

      expect(circularLinkedList.getByIndex(-50)).toBeNull();
    });
  });

  describe('when index greater than length', () => {
    test('should return null', () => {
      const circularLinkedList = CircularLinkedList.fromValues(10, 20, 30);

      expect(circularLinkedList.getByIndex(500)).toBeNull();
    });
  });

  describe('when index at middle', () => {
    test('should return value at index', () => {
      const circularLinkedList = CircularLinkedList.fromValues(10, 20, 30);

      expect(circularLinkedList.getByIndex(0).value).toBe(10);
      expect(circularLinkedList.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('should add element at index 0', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.insertAtIndex(-10, 50);
      expect(circularLinkedList.length).toBe(3);
    });
  });

  describe('with index greater than max', () => {
    test('should not add element at index > length', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.insertAtIndex(100, 50);
      expect(circularLinkedList.length).toBe(3);
    });
  });

  describe('with at 0', () => {
    test('should add element at index 0', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.insertAtIndex(0, 50);
      expect(circularLinkedList.head.value).toBe(50);
      circularLinkedList.insertAtIndex(0, 100);
      expect(circularLinkedList.head.value).toBe(100);
    });
  });

  describe('with index at middle', () => {
    test('should add element at given index', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.insertAtIndex(1, 50);
      circularLinkedList.insertAtIndex(3, 250);
      expect(circularLinkedList.head.value).toBe(0);
      expect(circularLinkedList.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  describe('when list is empty', () => {
    test('should return null', () => {
      // let circularLinkedList = new CircularLinkedList();
      const circularLinkedList = CircularLinkedList.fromValues();
      expect(circularLinkedList.removeHead()).toBeNull();
    });
  });

  describe('when list is not empty', () => {
    test('should remove head', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.removeHead();
      expect(circularLinkedList.head.value).toBe(10);
      expect(circularLinkedList.length).toBe(2);
    });
  });
});

describe('#removeAtIndex', () => {
  describe('when index less than 0', () => {
    test('should be null', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      expect(circularLinkedList.removeAtIndex(-10)).toBeNull();
    });
  });

  describe('when index greater than max', () => {
    test('should be null', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      expect(circularLinkedList.removeAtIndex(1000)).toBeNull();
    });
  });

  describe('when list is not empty', () => {
    test('should remove at index 0', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.removeAtIndex(0);
      expect(circularLinkedList.head.value).toBe(10);
      circularLinkedList.removeAtIndex(0);
      expect(circularLinkedList.head.value).toBe(20);
      expect(circularLinkedList.length).toBe(1);
    });
  });

  describe('when list is not empty', () => {
    test('should remove at index ', () => {
      const circularLinkedList = CircularLinkedList.fromValues(0, 10, 20);

      circularLinkedList.removeAtIndex(1);
      expect(circularLinkedList.head.nextNode.value).toBe(20);
      expect(circularLinkedList.head.nextNode.nextNode.value).toBe(0);
      expect(circularLinkedList.length).toBe(2);
    });
  });
});
