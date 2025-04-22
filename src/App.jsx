import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import 'flowbite';

import Header from './components/header.jsx';
import Index from './pages/index.jsx';
import Select from './pages/select.jsx';
import Results from './pages/results.jsx';
import Admin from './pages/admin.jsx'
import Login from './pages/login.jsx'
import Test from './pages/test.jsx';
import Footer from './components/footer.jsx';

import './css/tailwind.css';
import './css/flowbite.css';
import './css/inputmain.css';

function App() {  

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/select" element={<Select />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route 
          path="/admin" 
          element={loggedIn ? <Admin /> : <Login setLoggedIn={setLoggedIn} />} 
        />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
