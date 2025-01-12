import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import Steps from './pages/Steps';
import About from './pages/About';
import Contact from './pages/Contact';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/steps" element={<Steps />} />
      <Route path="/about" element={<About />} />
      <Route path="/about" element={<Contact />} />
    </Routes>
  </Router>
);
