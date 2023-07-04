export function handleNodeUpdate(nodes, setNodes, edges, setEdges, selectedNodeId, nodeName, nodeHidden) {
  // Update node label
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

  // Update node and edge visibility
  setNodes((nds) =>
    nds.map((node) => {
      if (node.id === selectedNodeId) {
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
}
