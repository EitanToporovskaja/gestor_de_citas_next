// Card.js
import React from 'react';
//import PropTypes from 'prop-types';
import './style.css'; // Asegúrate de importar el archivo CSS

const Card = ({ bgColor, bgColorLight, textColorHover, boxShadowColor, title, svg, className, description, imageSrc }) => {
  return (
  <div className={className}>
    <div className="circle">
      <img src={imageSrc} alt={title} className="card-image"/>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="card" style={{ '--bg-color': bgColor, '--bg-color-light': bgColorLight, '--text-color-hover': textColorHover, '--box-shadow-color': boxShadowColor }}>
      <div className="overlay"></div>
      <div className="circle">
        {svg}
      </div>
      <p>{title}</p>
    </a>
  </div>
    
  );
};

/*Card.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgColorLight: PropTypes.string.isRequired,
  textColorHover: PropTypes.string.isRequired,
  boxShadowColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  svg: PropTypes.element.isRequired,
};*/

export default Card;