import React, { useState } from 'react';
import { Panel } from 'reactflow';

function TopRightPanel({ nodeName, nodeHidden, setNodeName, setNodeHidden }) {
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

  return (
    <Panel position="top-right" name="top-right">
      <div className="toprightpanel">
        <i className="fa-solid fa-pen-nib" onClick={togglePanelVisibility}>
        </i>
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
              <input
                type="checkbox"
                checked={nodeHidden}
                onChange={handleHiddenChange}
              />
            </div>
          </div>
        )}
      </div>
    </Panel>
  );
}

export default TopRightPanel;
