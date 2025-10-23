import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="141, 220, 239"    // use your accent color
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
      />
    <App />
  </React.StrictMode>
);

reportWebVitals();
