import React, { useCallback } from 'react';
import { addEdge } from 'reactflow';

export function handleConnect(nodes, setEdges) {
  return useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
}

export function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

export function handleDrop(nodes, setNodes, reactFlowInstance, reactFlowWrapper) {
  return useCallback(
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
        console.log("Updated Nodes: ", updatedNodes.map(({ id, data: { label } }) => ({ id, label }))); // For Future Node Modification.
        return updatedNodes;
      });
    },
    [reactFlowInstance, reactFlowWrapper, setNodes]
  );
}

let id = 0;
export function getId() {
  return `lensbu_${id++}`;
}
