// App.js

import React from 'react';
import Navbar from './navbar';
import Slider from './slider';
import Footer from './footer';
import './App.css'; // Создайте файл App.css для стилей

function App() {
  return (
      <div className="App">
        <Navbar />
        <Slider />
        <Footer />
      </div>
  );
}

export default App;
