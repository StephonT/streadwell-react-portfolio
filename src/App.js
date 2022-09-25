import React from 'react';
import './App.css';

import About from './components/About'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Banner></Banner>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
