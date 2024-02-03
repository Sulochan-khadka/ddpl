import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all-projects' element={<AllProjects />} />
    </Routes>
  );
};

export default Router;
