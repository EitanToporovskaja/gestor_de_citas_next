import React from 'react';

import { style } from './style';

const BotonEliminar = ({ onClick }) => {
  return (
    <button style={style.button} onClick={onClick}>Eliminar</button>
  );
};



export default BotonEliminar;