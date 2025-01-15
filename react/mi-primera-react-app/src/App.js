import "./App.css";
import React, { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";



function App() {
  const [mostrarEventos, setMostrarEventos] = useState(true);
  
  const [eventos, setEventos] = useState([
    { titulo: "examen dwec", id: 1 },
    { titulo: "concurso programame", id: 2 },
    { titulo: "fiesta de sant antoni", id: 3 },
  ]);

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
      {mostrarEventos && eventos.map((evento, index) => (
        <React.Fragment key={evento.id}>
          <h2>
            {index} - {evento.titulo}
          </h2>
          <button onClick={() => handleClick(evento.id)}>
            Eliminar Evento
          </button>
        </React.Fragment>
      ))}
      <Modal>
        <h2>Stem Talks</h2>
        <p>No te lo pierdas: 30 y 31 de enero</p>
        <a href="https://gdg.community.dev/events/details/google-gdg-menorca-presents-stem-talks-menorca-2024-dia-1/" target="_blank">¡Has clic aquí!</a>
      </Modal>
    </div>
  );
}

export default App;
