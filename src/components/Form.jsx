import React from 'react'

const Form = () => {
  return (
    <React.Fragment>
      <h2>Crear Citas</h2>
      <form>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name='mascota'
          className='u-full-width'
          placeholder='nombre de la mascota'
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name='propietario'
          className='u-full-width'
          placeholder='nombre propietario de la mascota'
        />
        <label>Fecha</label>
        <input
          type="date"
          name='fecha'
          className='u-full-width'
        />
        <label>Hora</label>
        <input
          type="time"
          name='hora'
          className='u-full-width'
        />
        <label>Síntomas</label>
        <textarea
          className='u-full-width'
          name="sintomas"
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