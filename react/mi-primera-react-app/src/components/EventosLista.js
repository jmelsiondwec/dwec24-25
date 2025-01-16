import React from "react";

export default function EventosLista({ eventos, handleClick}) {
  return (
    <div>
      {eventos.map((evento, index) => (
        <React.Fragment key={evento.id}>
          <h2>
            {index} - {evento.titulo}
          </h2>
          <button onClick={() => handleClick(evento.id)}>
            Eliminar Evento
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
