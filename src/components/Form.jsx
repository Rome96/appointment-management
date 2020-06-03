import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createQuotes }) => {

  const [quote, setQuote] = useState({
    hora: "",
    fecha: "",
    mascota: "",
    sintomas: "",
    propietario: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value,
    });
  };

  const { hora, fecha, mascota, sintomas, propietario } = quote;

  // send form
  const submitQuote = (e) => {
    e.preventDefault();

    //validate from
    if (
      hora.trim() === "" ||
      fecha.trim() === "" ||
      mascota.trim() === "" ||
      sintomas.trim() === "" ||
      propietario.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    //asignar un ID
    quote.id = uuidv4()

    //create Quotes
    createQuotes(quote)

    //Reset from
    setQuote({
      hora: "",
      fecha: "",
      mascota: "",
      sintomas: "",
      propietario: "",
    })
  };

  return (
    <React.Fragment>
      <h3>Crear Citas</h3>
      {error && (
        <p className="error-text">Todos los campos son obligatorios. </p>
      )}
      <form onSubmit={submitQuote}>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name="mascota"
          value={mascota}
          onChange={handleChange}
          className="u-full-width"
          placeholder="nombre de la mascota"
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          value={propietario}
          onChange={handleChange}
          className="u-full-width"
          placeholder="nombre propietario de la mascota"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleChange}
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={hora}
          onChange={handleChange}
          className="u-full-width"
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          value={sintomas}
          onChange={handleChange}
          className="u-full-width"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
