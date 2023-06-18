import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const traerdata = async () => {
      try {
        const resultado = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
        setHeroes(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    traerdata();
  }, []);

  return (
    <div>
      {heroes.map(hero => (
        <div id='listaheroes' key={hero.id}>
          <img id='imagen' src={hero.images.sm} alt={hero.name} />
          <ul>
            <h3>{hero.name}</h3>
            <p>Height :{hero.appearance.height[1]}</p>
            <p>Weight :{hero.appearance.weight[1]}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListaHeroes;