import React from 'react';
import { Panel } from 'reactflow';
import Button from 'react-bootstrap/Button';
function TopLeftPanel() {
  return (
    <Panel position="top-left" name="top-left">
      <div className="dropdown">
        <button className="button button-hamburger">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="dropdown-content">
          <a>Aksiyon 1</a>
          <a>Aksiyon 2</a>
          <a>Aksiyon 3</a>
        </div>
      </div>
    </Panel>
  );
}

export default TopLeftPanel;
