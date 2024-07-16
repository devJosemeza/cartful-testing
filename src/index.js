import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from './pages';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
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
