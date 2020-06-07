import React, { useState } from 'react';
import Form from './components/Form'
import Quote from './components/Quote'


const RenderQuote = (quotes, deleteQuotes) => (
  quotes.map(quote => (
    <Quote
      key={quote.id}
      quote={quote}
      deleteQuotes={deleteQuotes}
    />
  ))
)

function App() {
  const [ quotes, setQuotes ] = useState([])

  const createQuotes = (quote) => {
    setQuotes([
      ...quotes,
      quote
    ])
  }

  const deleteQuotes = (id) => {
    const newQuotes = quotes.filter(quote => quote.id !== id )
    setQuotes(newQuotes)
    console.log('Citas:', newQuotes)
  }

  return (
    <React.Fragment>
      <h2>Administrador de pacientes</h2>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form
              createQuotes={createQuotes}
            />
          </div>
          <div className='one-half column'>
            <h3>
              {
                quotes.length ? 'Administra tus citas' : 'No hay citas'
              }
            </h3>
            { RenderQuote(quotes, deleteQuotes) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
