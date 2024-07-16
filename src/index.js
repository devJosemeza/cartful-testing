import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from './pages';
import { About } from './pages/about';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
