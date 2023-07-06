import React from 'react';
import { Panel } from 'reactflow';

function TopLeftPanel() {
  return (
    <Panel position="top-left" name="top-left">
      <div className="dropdown">
        <button className="button button-hamburger">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="dropdown-content">

    
          <a className="d-flex align-items-center" href="/">
          <i class="fa-solid fa-microscope fa-xl"></i>
  <div className="fs-6 font-monospace ms-2">Oyun Alanı</div>
</a>
         
          <a className="d-flex align-items-center" href="/kurallar">
  <i className="fa-solid fa-book-skull fa-xl"></i>
  <div className="fs-6 font-monospace ms-2">Kurallar</div>
</a>

        <a className="d-flex align-items-center">
  <i className="fa-solid fa-file-export fa-xl"></i>
  <div className="fs-6 font-monospace ms-2"> Kaydet</div>
        </a>
    
          <div>
          <a className="d-flex align-items-center">
  <i className="fa-solid fa-file-upload fa-xl"></i>
  <div className="fs-6 font-monospace ms-2"> Yükle</div>
        </a>
          </div>
          

        </div>
      </div>
    </Panel>
  );
}

export default TopLeftPanel;
