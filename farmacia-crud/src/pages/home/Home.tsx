import React from 'react';
import './Home.css';
import homeLogo from '../../assets/farmacia.jpg'


function Home(){
    return (
        <>
            
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;
