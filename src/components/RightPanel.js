import React, { useState } from 'react';
import { Panel } from 'reactflow';
import { getId } from '../handlers/DnDHandler.js';

function RightPanel({ nodeName, nodeHidden, setNodeName, setNodeHidden, onNodesChange, nodes, selectedNodeId }) {
  // STATES
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [areExtraIconsVisible, setAreExtraIconsVisible] = useState(false);

  const togglePanelVisibility = () => {
    setIsPanelVisible((prevVisibility) => !prevVisibility);
  };

  const toggleExtraIconsVisibility = () => {
    setAreExtraIconsVisible((prevVisibility) => !prevVisibility);
  };
  // STATES

  // HANDLERS
  const handleNameChange = (event) => {
    setNodeName(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setNodeHidden(event.target.checked);
  };

  const handleDeleteNode = () => {
    onNodesChange([{ type: 'remove', id: selectedNodeId }]);
    const nodeInfo = nodes.map((node) => ({ id: node.id, label: node.data.label }));
    console.log('Existing Nodes:', nodeInfo); // for future use
  };

  const handleAddNode = () => {
    const newNode = {
      id: getId(),
      position: { x: 200, y: -50 },
      data: { label: `node` },
    };
    onNodesChange([{ type: 'add', item: newNode }]);
    const nodeInfo = nodes.map((node) => ({ id: node.id, label: node.data.label }));
    console.log('Existing Nodes:', nodeInfo); // for future use
  };
  // HANDLERS

  // RETURN
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
          <br />

          <div>
            <i className="fa-solid fa-plug fa-xl" onClick={toggleExtraIconsVisibility}></i>
          </div>

          {areExtraIconsVisible && (
            <div className="border p-1 mt-4 rounded flex ">

              <div>
              <i class="fa-solid fa-cloud-moon-rain fa-lg" onClick={handleAddNode}></i>
              </div>

              <br />

              <div>
              <i class="fa-solid fa-masks-theater fa-lg" onClick={handleAddNode}></i>
              </div>

              <br />

              <div>
              <i class="fa-solid fa-timeline fa-lg" onClick={handleAddNode}></i>
              </div>
            </div>
          )}

          <br />

          <div>
            <i className="fa-solid fa-trash fa-xl" onClick={handleDeleteNode}></i>
          </div>

          <br />
        </ul>
      </Panel>
      <Panel position="bottom-right" name="bottom-right">
      <div>
          <i class="fa-solid fa-file-export fa-xl"></i>
          </div>

          <br/>
          <div>
          <i class="fa-solid fa-upload fa-xl"></i>
          </div>
          </Panel>
    </>
  );
}
// RETURN

// EXPORTS
export default RightPanel;
// EXPORT
