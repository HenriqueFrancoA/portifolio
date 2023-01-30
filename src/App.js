import './App.css';
import { MenuItens } from './components/MenuItens';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projetos } from './components/Projetos';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App" >
      <MenuItens/>
      <Home/>
      <Skills/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
