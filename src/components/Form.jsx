import React, { useState } from 'react'

const Form = () => {

  const [quotes, setQuotes] = useState({
    hora:'',
    fecha: '',
    mascota: '',
    sintomas: '',
    propietario: '',
  })

  const handleChange = (e) => {
    setQuotes({
      ...quotes,
      [e.target.name] : e.target.value
    })
  }

  const { hora, fecha, mascota, sintomas, propietario } = quotes

  return (
    <React.Fragment>
      <h2>Crear Citas</h2>
      <form>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name='mascota'
          value={mascota}
          onChange={handleChange}
          className='u-full-width'
          placeholder='nombre de la mascota'
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name='propietario'
          value={propietario}
          onChange={handleChange}
          className='u-full-width'
          placeholder='nombre propietario de la mascota'
        />
        <label>Fecha</label>
        <input
          type="date"
          name='fecha'
          value={fecha}
          onChange={handleChange}
          className='u-full-width'
        />
        <label>Hora</label>
        <input
          type="time"
          name='hora'
          value={hora}
          onChange={handleChange}
          className='u-full-width'
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          value={sintomas}
          onChange={handleChange}
          className='u-full-width'
        >
        </textarea>
        <button
          type='submit'
          className='u-full-width button-primary'
        >
          Agregar Cita
        </button>
      </form>
    </React.Fragment>
  );
}
 
export default Form;