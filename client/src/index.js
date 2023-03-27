import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header.js';
import Home from './Home.js';
import Product from './Product.js';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
root.render(<Header />);
 root.render(<Home />);
 root.render(<Product />);

