import Node from "./Node";

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }
  insertNode(current, newNode) {
    if (newNode.value === current.value) return;

    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }

 preOrder() {
    const result = [];
    this.preOrderNode(this.root, result);
    return result;
  }

  preOrderNode(node, result) {
    if (node === null) return;

    result.push(node.value);
    this.preOrderNode(node.left, result);
    this.preOrderNode(node.right, result);
  }
    inOrder() {
    const result = [];
    this.inOrderNode(this.root, result);
    return result;
  }

  inOrderNode(node, result) {
    if (node === null) return;

    this.inOrderNode(node.left, result);
    result.push(node.value);
    this.inOrderNode(node.right, result);
  }
    postOrder() {
    const result = [];
    this.postOrderNode(this.root, result);
    return result;
  }

  postOrderNode(node, result) {
    if (node === null) return;

    this.postOrderNode(node.left, result);
    this.postOrderNode(node.right, result);
    result.push(node.value);
  }
    contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) return false;

    if (value === node.value) return true;

    if (value < node.value) {
      return this.containsNode(node.left, value);
    }

    return this.containsNode(node.right, value);
  }

  toD3Data() {
    return this.toD3Node(this.root);
  }

  toD3Node(node) {
    if (node === null) return null;

    const data = { name: String(node.value) };
    const children = [];

    if (node.left !== null) children.push(this.toD3Node(node.left));
    if (node.right !== null) children.push(this.toD3Node(node.right));

    if (children.length > 0) data.children = children;

    return data;
  }
}