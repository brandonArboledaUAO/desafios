import Tree from "react-d3-tree";
import BinaryTree from "./BinaryTree";


export default function App() {
  const tree = new BinaryTree();
  tree.insert(8);
  tree.insert(3);
  tree.insert(16);
  tree.insert(9);
  tree.insert(25);
  tree.insert(12);
  tree.insert(1);
  tree.insert(6);
  tree.insert(20);


  console.log("PreOrder:", tree.preOrder());
  console.log("InOrder:", tree.inOrder());
  console.log("PostOrder:", tree.postOrder());
  console.log("¿Está el 6?", tree.contains(6));
  console.log("¿Está el 7?", tree.contains(7));
  console.log("¿Está el 8?", tree.contains(8));
  const data = tree.toD3Data();


  return (
    <div>
      <h1>Desafío 8: árboles</h1>
      <div style={{ width: "100%", height: "500px" }}>
        <Tree data={data} orientation="vertical" />
      </div>
    </div>
  );
}