import { useState } from 'react';
import './App.css';
import AsignaturasLista from './components/AsignaturasLista';
import AsignaturaForm from './components/AsignaturaForm';

function App() {

  const [actualizar, setActualizar] = useState(false);

  return (
    <div className="App">
      <AsignaturaForm setActualizar={setActualizar} />
      <AsignaturasLista actualizar={actualizar} />
    </div>
  );
}

export default App;
