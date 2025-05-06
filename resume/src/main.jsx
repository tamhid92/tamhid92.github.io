import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'; // Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component */}
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)