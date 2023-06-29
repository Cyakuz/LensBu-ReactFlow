import React from "react";
import ReactFlow, { Controls, Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import Button from 'react-bootstrap/Button';



function Flow() {

  return (
    <div style={{ height: '100%' }}>
      
      <ReactFlow>
     
     
      <Panel position="top-left" name="top-left">
      <button class="button button5">Black</button>
      </Panel>
      
        <Background />
        <Controls />
        
      </ReactFlow>
    </div>
  );
}

export default Flow;
