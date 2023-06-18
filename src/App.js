import './App.css';
import React from 'react';
import ListaHeroes from './Hero';


function App() {
  return (
    <div className='contenedor'>
      <div className='titulo-contenedor'>
        <p>Superhero App</p>
      </div>
      <div id='contenedor-lista-heroes'>
        <ListaHeroes />
      </div>
    </div>
  );
}

export default App;
