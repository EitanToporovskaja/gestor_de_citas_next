import React from 'react';
import { style } from './style';

const BotonForm = ({ text }) => {
  return (
    <a style={style.a} href="/contacto"> <button style={style.boton}><b>{text}</b></button></a>
  );
  
};

export default BotonForm;