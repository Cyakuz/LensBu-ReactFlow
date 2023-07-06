import React, { useState } from 'react';
import { Panel } from 'reactflow';
import {getId} from '../handlers/DnDHandler.js'

function TopRightPanel({ nodeName, nodeHidden, setNodeName, setNodeHidden, onNodesChange, nodes, selectedNodeId }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const togglePanelVisibility = () => {
    setIsPanelVisible((prevVisibility) => !prevVisibility);
  };

  const handleNameChange = (event) => {
    setNodeName(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setNodeHidden(event.target.checked);
  };

  const handleDeleteNode = () => {
    onNodesChange([{ type: 'remove', id: selectedNodeId }]);
    const nodeInfo = nodes.map((node) => ({ id: node.id, label: node.data.label }));
  console.log('Existing Nodes:', nodeInfo); //for future use
  };

  const handleAddNode = () => {
    const newNode = {
      id: getId(),
      position: { x: 200, y: -50 },
      data: { label: `node` },
    };
    onNodesChange([{ type: 'add', item: newNode }]);
    const nodeInfo = nodes.map((node) => ({ id: node.id, label: node.data.label }));
  console.log('Existing Nodes:', nodeInfo); //for future use
  };

  return (
    <>
      <Panel position="top-right" name="top-right">
        <ul>
          <div>
            <i className="fa-solid fa-pen-nib fa-xl" onClick={togglePanelVisibility}></i>
            {isPanelVisible && (
              <div className="toprightpanel__content">
                <label>Buradan Veriyi Değiştirin!</label>
                <textarea
                  value={nodeName}
                  onChange={handleNameChange}
                  style={{ resize: 'vertical', minHeight: '50px', maxHeight: '200px', width: '175px' }}
                />

                <div className="updatenode__checkboxwrapper">
                  <label>hidden:</label>
                  <input type="checkbox" checked={nodeHidden} onChange={handleHiddenChange} />
                </div>
              </div>
            )}
          </div>
          <br/>

          <div>
          <i class="fa-solid fa-plug fa-xl" onClick={handleAddNode}></i>
          </div>

          <br/>

          <div>
            <i className="fa-solid fa-trash fa-xl" onClick={handleDeleteNode}></i>
          </div>

        
         
        </ul>
      </Panel>
    </>
  );
}

export default TopRightPanel;
