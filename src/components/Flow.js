import React from "react";
import ReactFlow, { Controls, Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';



function Flow() {

  return (
    <div style={{ height: '100%' }}>
      
      <ReactFlow>
     
     
      <Panel position="top-left" name="top-left">
      <div className="dropdown">
      <button className="button button-hamburger">
      <i className="fa-solid fa-bars" ></i>
      </button>
      <div class="dropdown-content">
        <a>Aksiyon 1</a>
        <a>Aksiyon 2</a>
        <a>Aksiyon 3</a>
        </div>
      </div>
      </Panel>
      
        <Background />
        <Controls />
        
      </ReactFlow>
    </div>
  );
}

export default Flow;
