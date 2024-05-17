import React, { useEffect } from 'react';
import 'bulma/css/bulma.css';
import "animate.css/animate.min.css";

import { Routes, Route } from "react-router-dom";

import Home from './routes/home';
import Projects from './routes/projects';
import Contact from './routes/contact';
import Experiences from './routes/experiences';
// import Download from './routes/download';
// import Contributions from './routes/contributions';
// import NotFound from './routes/not_found';
// import News from './routes/news';
// import InConstruction from './routes/in_construction';


// import useStore from './data/useStore';;



function App() {
  // const fileStore = useStore();

  // useEffect(() => {
  //   loadFiles();
  // }, []);

  // const loadFiles = async () => {
  //   try {
  //     const team = await import('./data/team.json');
  //     const download = await import('./data/download.json');
  //     const material = await import('./data/material.json');
  //     const news = await import('./data/news.json');
  //     const contributions = await import('./data/contributions.json');

  //     fileStore.setFile('team', team);
  //     fileStore.setFile('download', download);
  //     fileStore.setFile('material', material);
  //     fileStore.setFile('news', news);
  //     fileStore.setFile('contributions', contributions);
  //   } catch (error) {
  //     console.error('Error loading files:', error);
  //   }
  // };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;