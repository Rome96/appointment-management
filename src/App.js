import React, { useState } from 'react';
import Form from './components/Form'

function App() {

  const [ quotes, setQuotes ] = useState([])

  const createQuotes = (quote) => {
    console.log('Citas', quote)
    setQuotes([
      ...quotes,
      quote
    ])
  }
 console.log('Array quotes:', quotes)
  return (
    <React.Fragment>
      <h2>Administrador de pacientes
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form
              createQuotes={createQuotes}
            />
          </div>
          <div className='one-half column'>
            2
          </div>
        </div>
      </div>
      </h2>
    </React.Fragment>
  );
}

export default App;
