import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Quote from "./components/Quote";

const RenderQuote = (quotes, deleteQuotes) =>
  quotes.map((quote) => (
    <Quote
      key={quote.id}
      quote={quote}
      deleteQuotes={deleteQuotes}
    />
  ));

function App() {
  //quotes in localStorage 
  let initialQuotes = JSON.parse(localStorage.getItem("quotes"));
  
  if (!initialQuotes) {
    initialQuotes = [];
  }

  const [quotes, setQuotes] = useState(initialQuotes);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    initialQuotes
      ? localStorage.setItem("quotes", JSON.stringify(quotes))
      : localStorage.setItem("quotes", JSON.stringify([]));
  }, [quotes]);

  const createQuotes = (quote) => {
    setQuotes([...quotes, quote]);
  };

  const deleteQuotes = (id) => {
    const newQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(newQuotes);
    console.log("Citas:", newQuotes);
  };

  return (
    <React.Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createQuotes={createQuotes} />
          </div>
          <div className="one-half column">
            <h3>{quotes.length ? "Administra tus citas" : "No hay citas"}</h3>
            {RenderQuote(quotes, deleteQuotes)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
