import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'flowbite';

import Header from './components/header.jsx';
import Index from './pages/index.jsx';
import Select from './pages/select.jsx';
import Results from './pages/results.jsx';
import Mission from './pages/mission.jsx';
import About from './pages/about.jsx';
import Test from './pages/test.jsx';
import Footer from './components/footer.jsx';

import './css/tailwind.css';
import './css/flowbite.css';
import './css/inputmain.css';



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/select" element={<Select />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/mission" element={<Mission />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
