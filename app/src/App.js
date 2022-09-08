import React, {Fragment, useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

import { InputText } from 'primereact/inputtext';
const App = () => {

const [edge, setEdge] = useState("");
const [vertex, setVertex] = useState("");
const [list, setList] = useState([
  { data: { id: 'a' } },
  { data: { id: 'b' } },
  {
    data: {
      id: 'ab',
      source: 'a',
      target: 'b'
    }
  }]);
 const graphRef = useRef(null)

 const drawGraph = () => {
 let cy = cytoscape({
  container: graphRef.current,
  elements: list
  });
 }


function addElement () {
 console.log(drawGraph);
 list.push( { data: { id: vertex} })
 drawGraph();
}

function addEdge() {
  console.log(drawGraph);
  list.push(  {
   data: {
     id: edge+'b',
     source: edge,
     target: 'b'
   }
 })
 console.log(list);
 drawGraph();

}

 useEffect(() => {
  drawGraph()
 }, [])

 return (
  <Fragment>
   <h2>Cytoscape Test</h2>
   <div class="grid">
   <div class="col-6">
   <div ref={graphRef} style={{width: '80%', height: '80vh', backgroundColor:'antiquewhite'}}>
   </div>
   </div>
   <div class="col-4">
   <div class="grid">
   <Button label="Save New Edge" icon="pi pi-check" iconPos="right" onClick={addEdge} />
   <InputText value={edge} onChange={(e) => setEdge(e.target.value)} />
   </div>
   <br></br>
   <br></br>
   <div class="grid">
   <Button label="Save New Vertex" icon="pi pi-check" iconPos="right" onClick={addElement} danger/>
   <InputText value={vertex} onChange={(e) => setVertex(e.target.value)} />

   </div>
   </div>
   </div>
  </Fragment>
  
 )
}

export default App