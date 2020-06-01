import React from 'react';
import Form from './components/Form'

function App() {
  return (
    <React.Fragment>
      <h2>Administrador de pacientes
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form/>
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
