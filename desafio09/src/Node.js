export default class Node {
  constructor(title, link, component) {
    this.title = title;
    this.link = link;
    this.component = component;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
    
  printDFS(level = 0) {
    console.log("  ".repeat(level) + this.title);

    for (const child of this.children) {
      child.printDFS(level + 1);
    }
  }
}