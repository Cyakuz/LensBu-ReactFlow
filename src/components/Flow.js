import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import TopLeftPanel from './TopLeftPanel';
import TopRightPanel from './TopRightPanel';
import {
  handleConnect,
  handleDragOver,
  handleDrop,
} from '../handlers/DnDHandler';

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
 
function Flow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(handleConnect(nodes, setEdges), [nodes, setEdges]);



  const [nodeName, setNodeName] = useState('Node 1');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              label: nodeName,
            },
          };
        }
        return node;
      })
    );
  }, [nodeName, selectedNodeId, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.style = { ...node.style, backgroundColor: nodeBg };
        }
        return node;
      })
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.hidden = nodeHidden;
        }
        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'e1-2') {
          edge.hidden = nodeHidden;
        }
        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  const handleNodeClick = (event, node) => {
    setSelectedNodeId(node.id);

    if (node.data && node.data.label) {
      setNodeName(node.data.label);
    }
  };




  return (
    <div className="dndflow" style={{ height: '100%' }}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={handleDrop(nodes, setNodes, reactFlowInstance, reactFlowWrapper)}
            onDragOver={handleDragOver}
            fitView
            attributionPosition="bottom-left"
            onNodeClick={handleNodeClick}
          >
             <TopRightPanel
    nodeName={nodeName}
    nodeBg={nodeBg}
    nodeHidden={nodeHidden}
    setNodeName={setNodeName}
    setNodeBg={setNodeBg}
    setNodeHidden={setNodeHidden}
  />
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
