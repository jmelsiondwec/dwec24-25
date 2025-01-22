import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";
import EventosLista from "./components/EventosLista";
import EventoNuevoForm from "./components/EventoNuevoForm";

function App() {
  const [muestraModal, setMuestraModal] = useState(false);
  const [mostrarEventos, setMostrarEventos] = useState(true);
  
  const [eventos, setEventos] = useState([]);

  const addEvento = (evento) => {
    setEventos((eventosPrevios) => {
      return [...eventosPrevios, evento];
    })
    setMuestraModal(false);
  }

  const handleClick = (id) => {
    setEventos((eventosPrevios)=> eventosPrevios.filter((evento)=> id !== evento.id));
  };

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
      {muestraModal && <Modal destino={document.body} esExterno={true}>
        <EventoNuevoForm addEvento={addEvento} />
      </Modal>}
      <div>
        <button onClick={() => setMuestraModal(true)}>Crear Nuevo Evento</button>
      </div>
    </div>
  );
}

export default App;
