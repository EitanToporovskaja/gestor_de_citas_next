import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (animal) => {
    setExpanded(prevState => ({
      ...prevState,
      [animal]: !prevState[animal]
    }));
  };

  return (
    <div className="home-container">
      <h1>Bienvenidos a Nuestra Veterinaria</h1>
      <p>Tratamos a una amplia variedad de animales con el mayor cuidado y dedicación.</p>

      <div className="animal-section">
        <div className="animal-card" onClick={() => toggleExpand('perros')}>
          <h2>Perros</h2>
          {expanded.perros && (
            <p>Ofrecemos servicios completos para perros, incluyendo consultas, vacunación, cirugía y más.</p>
          )}
        </div>

        <div className="animal-card" onClick={() => toggleExpand('gatos')}>
          <h2>Gatos</h2>
          {expanded.gatos && (
            <p>Nuestros especialistas en felinos brindan atención experta para mantener a tu gato saludable y feliz.</p>
          )}
        </div>

        <div className="animal-card" onClick={() => toggleExpand('aves')}>
          <h2>Aves</h2>
          {expanded.aves && (
            <p>Contamos con servicios especializados para el cuidado de aves, incluyendo exámenes y tratamientos.</p>
          )}
        </div>

        <div className="animal-card" onClick={() => toggleExpand('reptiles')}>
          <h2>Reptiles</h2>
          {expanded.reptiles && (
            <p>Proporcionamos atención veterinaria para reptiles, garantizando su salud y bienestar.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
