import React from "react";
import "./style.css";
import Kurallar from "./scenes/Kurallar";
import Oyun from "./scenes/Oyun";
import Flow from './components/Flow';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";

<script src="https://kit.fontawesome.com/66ffc5668c.js" crossorigin="anonymous"></script>

export default function App() {
  return (
    <>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Oyun/>} />
            <Route path='/kurallar' element={<Kurallar/>} />
            <Route path="/:id/:userid" element={<Flow />} />
          </Routes>
    </BrowserRouter>
      
    </>
  );
}
