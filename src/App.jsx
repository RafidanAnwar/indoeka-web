import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './sections/Home';
import About from './sections/About';
import LayananKami from './sections/LayananKami';
import Galeri from './sections/Galeri'; // 1. Impor file baru
import VisiMisi from './sections/VisiMisi';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Home />
        <About />
        <LayananKami />
        <Galeri /> {/* 2. Tambahkan di sini */}
        <VisiMisi />
        <Contact />
      </main>
      <AppFooter />
    </>
  );
}

export default App;