import React from 'react';

const Quote = ({ quote }) => {
  const { mascota, propietario, fecha, hora, sintomas } = quote
  return (
    <div className='cita'>
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>

    </div>
  );
}
 
export default Quote;