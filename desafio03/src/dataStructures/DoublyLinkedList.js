    export class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

    append(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

    remove(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.length--;
        return current;
      }
      current = current.next;
    }
    return null;
  }

  size() {
    return this.length;
  }

    // NUEVO: guarda qué página se está viendo ahora
  // (agrega también "this.current = null;" en el constructor, junto a length)
  goBack() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
    return this.current ? this.current.value : null;
  }

  goForward() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current ? this.current.value : null;
  }

  // Simula navegar a una página nueva: si estabas "atrás" en el historial,
  // borra todo lo que había adelante (igual que un navegador real)
  visit(value) {
    if (this.current && this.current.next) {
      this.current.next = null;
      this.tail = this.current;

      let node = this.head;
      let count = 0;
      while (node) {
        count++;
        node = node.next;
      }
      this.length = count;
    }
    this.append(value);
    this.current = this.tail;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}