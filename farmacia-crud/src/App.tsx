import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './pages/catalogo/Catalogo';
import Categoria from './pages/categoria/Categoria';

import Navbar from './componentes/navBar/Navbar';
import Home from './pages/home/Home';
import Footer from './componentes/footer/Footer';
import ListaCategoria from './componentes/categorias/listaCategoria/ListaCategoria';


function App() {
  
  return (
    <>
      
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/categoria" element={<Categoria />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
             
             
            </Routes>
          </div>
          <Footer />
          </BrowserRouter>
       
    </>
  );
}

export default App;