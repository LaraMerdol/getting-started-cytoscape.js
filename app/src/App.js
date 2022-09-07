import "./App.css";
import CytoscapeComponent from "react-cytoscapejs";
import ReactCytoscape from 'react-cytoscape';
import React, {useState} from "react";
  const App = () => {
    
  const  [elements,setElements] = useState([
    { data: { id: "one", label: "Node 1" }, position: { x: 200, y: 100 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 300, y: 100 } },
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Node1 to Node2",
      },
    },
  ]);

function addElements() {
  let i = 0;
  for (i = 0; i < 10; i++) {
    elements.push({ data: { id:i, label:`Node${i}` } });
  }
  console.log(elements)
  return elements;
}
    return (
      <>
      <CytoscapeComponent
        elements={elements}
        style={{
          width: "800px",
          height: "400px",
          backgroundColor: "antiquewhite",
          align: "center",
        }}
        stylesheet={[
          {
            selector: "node",
            style: {
              width: 20,
              height: 20,
              shape: "rectangle",
            },
          },
          {
            selector: "edge",
            style: {
              width: 5,
            },
          },
        ]}
        layout={{
          name: "circle",
        }}
      />
      <button onClick={addElements}
       style={{
          width: "70px",
          height: "50px"}}
          >
            Add 100 Elements
          </button>
      </>
    );
  };

export default App;
