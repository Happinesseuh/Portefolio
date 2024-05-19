import React, { useEffect } from 'react';
import 'bulma/css/bulma.css';
import "animate.css/animate.min.css";

import { Routes, Route } from "react-router-dom";

import Home from './routes/home';
import Projects from './routes/projects';
import Contact from './routes/contact';
import Experiences from './routes/experiences';
import NotFound from './routes/notfound';

function App() {

  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;