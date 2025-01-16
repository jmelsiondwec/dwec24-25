import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";
import EventosLista from "./components/EventosLista";



function App() {
  const [muestraModal, setMuestraModal] = useState(false);
  const [mostrarEventos, setMostrarEventos] = useState(true);
  
  const [eventos, setEventos] = useState([
    { titulo: "examen dwec", id: 1 },
    { titulo: "concurso programame", id: 2 },
    { titulo: "fiesta de sant antoni", id: 3 },
  ]);

  const handleClick = (id) => {
    setEventos((eventosPrevios)=> eventosPrevios.filter((evento)=> id !== evento.id));
  };

  const handleCerrar = () => {
    setMuestraModal(false);
  }

  const subTitulo = "Todos los eventos para Desarrollo de Aplicaciones Web";

  return (
    <div className="App">
      <Titulo titulo="Eventos de DAW 24/25" subTitulo={subTitulo} />
      { mostrarEventos && (
        <div>
          <button onClick={()=>setMostrarEventos(false)}>Ocultar Eventos</button>
        </div>
      )}
      { !mostrarEventos && (
        <div>
          <button onClick={()=>setMostrarEventos(true)}>Mostrar Eventos</button>
        </div>
      )}
      {mostrarEventos && <EventosLista eventos={eventos} handleClick={handleClick} />}
      {muestraModal && <Modal handleCerrar={handleCerrar} destino={document.body}>
        <h2>Stem Talks</h2>
        <p>No te lo pierdas: 30 y 31 de enero</p>
      </Modal>}
      <div>
        <button onClick={() => setMuestraModal(true)}>Mostrar Modal</button>
      </div>
    </div>
  );
}

export default App;
