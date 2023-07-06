// IMPORTS START
import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, { ReactFlowProvider, useNodesState, useEdgesState, Controls,Background,} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import TopLeftPanel from './TopLeftPanel';
import RightPanel from './RightPanel';
import { handleConnect, handleDragOver, handleDrop, } from '../handlers/DnDHandler';
import { handleNodeUpdate } from '../handlers//UpdateHandler';
// IMPORTS END
//NODE INIT: GAME NAME FIX NODE START
const initialNodes = [
  {
    id: 'rule_0',
    data: { label: 'Olursa İyi Olur' },
    position: { x: 250, y: 0 },
    type: "input",
    style: {
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  {
    id: 'rule_1',
    data: { label: 'Kesinlikle Olmasın' },
    position: { x: 450, y: 0 },
    type: "input",
    style: {
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
];
//NODE INIT: GAME NAME FIX NODE END
// FLOW FUNCTION : REACT-FLOW CANVAS INIT FUNCTION
function Flow() {
  //INIT START: NODES, EDGES, WRAPPER, INSTANCE
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // INIT END
  // UPDATE NODE HANDLER START
  const [nodeName, setNodeName] = useState('Periyot, olay yada sahne seçimi yapın!');
  const [nodeHidden, setNodeHidden] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleNodeClick = (event, node) => {
    setSelectedNodeId(node.id);
    if (node.data && node.data.label) {
      setNodeName(node.data.label);
    }
  };

  useEffect(() => {
    handleNodeUpdate(nodes, setNodes, edges, setEdges, selectedNodeId, nodeName, nodeHidden);
  }, [nodeName, selectedNodeId, nodeHidden]);
  //UPDATE NODE HANDLER END
  // FUNCTIONS AND VARIABLES END - NOW RETURN FLOWPROVIDER
  return (
    <div className="dndflow" style={{ height: '100%' }}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onInit={setReactFlowInstance}
            fitView
            attributionPosition="bottom-left"
            onNodeClick={handleNodeClick}
          >
            <RightPanel
  nodeName={nodeName}
  nodeHidden={nodeHidden}
  setNodeName={setNodeName}
  setNodeHidden={setNodeHidden}
  onNodesChange={onNodesChange}
  nodes={nodes}
  selectedNodeId={selectedNodeId}
/>
            <TopLeftPanel />
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
//RETURN END
// FLOW FUNCTION : REACT-FLOW CANVAS INIT FUNCTION- END
// EXPORTS
export default Flow;
// EXPORTS END
