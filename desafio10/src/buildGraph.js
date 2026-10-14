import Graph from "./Graph";
import { cities, people, friendships } from "./data";

function fullName(firstName) {
  return people.find((p) => p.name.split(" ")[0] === firstName).name;
}

export default function buildGraph() {
  const graph = new Graph();

  for (const city of cities) {
    graph.addNode({ id: city, type: "city" });
  }

  for (const person of people) {
    graph.addNode({ id: person.name, type: "person", age: person.age });
  }

  for (const person of people) {
    graph.addEdge(person.name, person.city, "lives");
  }

  for (const [a, b] of friendships) {
    graph.addEdge(fullName(a), fullName(b), "friend");
  }

  return graph;
}