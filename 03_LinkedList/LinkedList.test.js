const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const linkedList = new LinkedList();

    linkedList.insertAtHead(10);
    const oldHead = linkedList.head;
    linkedList.insertAtHead(20);

    expect(linkedList.head.value).toBe(20);
    expect(linkedList.head.next).toBe(oldHead);
    expect(linkedList.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('should return null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('should return null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe('with index at 0', () => {
    test('should return head', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index at middle', () => {
    test('should return 30', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 100);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 100);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index at 0', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 100);
      expect(ll.head.value).toBe(100);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index at middle', () => {
    test('it inserts at given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 100);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(100);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  test('should remove the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();
    expect(ll.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(100);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index at 0', () => {
    test('remove the head', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index at middle', () => {
    test('remove at given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});
