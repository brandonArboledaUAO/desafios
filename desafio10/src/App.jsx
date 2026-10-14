import { Graph as GraphView } from "react-d3-graph";
import buildGraph from "./buildGraph";

const config = {
  width: 900,
  height: 600,
  nodeHighlightBehavior: true,
  node: { labelProperty: "label", fontSize: 12, highlightFontSize: 14 },
  
  d3: { gravity: -200, linkLength: 90 },
};

export default function App() {
  const graph = buildGraph();
  const data = graph.toGraphData();

  console.log("Personas en Cali:");
  console.table(graph.getPeopleInCity("Cali"));

  return (
    <div>
      <h1>Desafío 10: grafos</h1>
      <GraphView id="graph-id" data={data} config={config} />
    </div>
  );
}
