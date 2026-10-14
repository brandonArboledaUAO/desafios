export default class Graph {
  constructor() {
    this.nodes = [];
    this.adjacency = {};
    this.edges =[];
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacency[node.id] = [];
  }
  
  addEdge(idA, idB, type) {
    this.adjacency[idA].push(idB);
    this.adjacency[idB].push(idA);
    this.edges.push({ source: idA, target: idB, type });
  }

    findNode(id) {
    return this.nodes.find((node) => node.id === id);
  }

  getNeighbors(id) {
    return this.adjacency[id] || [];
  }
    getPeopleInCity(city) {
    return this.getNeighbors(city)
      .map((id) => this.findNode(id))
      .filter((node) => node.type === "person");
  }
   
  toGraphData() {
    return {
      nodes: this.nodes.map((node) => ({
        id: node.id,
        label: node.type === "city" ? node.id : node.id.split(" ")[0],
        color: node.type === "city" ? "#f59e0b" : "#2563eb",
        size: node.type === "city" ? 700 : 350,
      })),
            links: this.edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
        color: edge.type === "friend" ? "#ec4899" : "#94a3b8",
        strokeWidth: edge.type === "friend" ? 2 : 1.5,
      })),
    };
  }
}