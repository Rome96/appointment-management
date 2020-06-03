import React, { useState } from 'react';
import Form from './components/Form'
import Quote from './components/Quote'
function App() {

  const [ quotes, setQuotes ] = useState([])

  const createQuotes = (quote) => {
    console.log('Citas', quote)
    setQuotes([
      ...quotes,
      quote
    ])
  }

  const RenderQuote = (
    quotes.map(quote => (
      <Quote
        key={quote.id}
        quote={quote}
      />
    ))
  )
  
 console.log('Array quotes:', quotes)
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
            <h3>Administra tus citas</h3>
            { RenderQuote }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
