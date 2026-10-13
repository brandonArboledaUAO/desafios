export default class Queue {
  constructor() {
    this.items = [];
  }
 
  enqueue(person) {
    this.items.push(person);
    this.items.sort((a, b) => a.arrivalDate - b.arrivalDate);
  }
 
  dequeue() {
    return this.items.shift();
  }
 
  peek() {
    return this.items[0];
  }
 
  size() {
    return this.items.length;
  }
 
  isEmpty() {
    return this.items.length === 0;
  }
 
  toArray() {
    return [...this.items];
  }
}
 