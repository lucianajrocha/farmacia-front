import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './componentes/navBar/Navbar';
import Footer from './componentes/footer/Footer';
import ListaCategoria from './componentes/categorias/listaCategoria/ListaCategoria';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;