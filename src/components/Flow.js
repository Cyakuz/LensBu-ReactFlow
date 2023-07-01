import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls, Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import TopLeftPanel from './TopLeftPanel';


const initialNodes = [
  {
    id: 'lesnbu_init',
    data: { label: 'Oyun İsmi' },
    position: { x: 250, y: 5 },
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  },
];

let id = 0;
const getId = () => `lensbu_${id++}`;


function Flow() {

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };
      

      setNodes((nds) => {
        const updatedNodes = nds.concat(newNode);
        console.log("Updated Nodes: ", updatedNodes.map(({ id, data: { label } }) => ({ id, label }))); // For Future Node Modifikasyon.
        return updatedNodes;
      });
    },
  );


  return (
    <div className="dndflow" style={{ height: '100%' }}>
      <ReactFlowProvider>
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
      <ReactFlow nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            >
              <TopLeftPanel />
              <Background />
              <Controls />
              </ReactFlow>
      </div>
      
      <Sidebar />
      
      </ReactFlowProvider>
    </div>
  );
}

export default Flow;
