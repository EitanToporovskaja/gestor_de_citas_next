import React from 'react';
import { style } from './style';
import BotonEliminar from '../BotonEliminar';

const CardTurno = ({ petName, ownerName, date, symptoms, onDelete }) => {
  return (
    <div style={style.card}>
      <h2 style={style.title}>Turno</h2>
      <p style={style.info}>Nombre mascota: {petName}</p>
      <p style={style.info}>Fecha del turno: {date}</p>
      <p style={style.info}>Mail dueño: {ownerName}</p>
      <p style={style.info}>Comentario: {symptoms}</p>
      <BotonEliminar onClick={onDelete} style={style.button} />
    </div>
  );
};

export default CardTurno;