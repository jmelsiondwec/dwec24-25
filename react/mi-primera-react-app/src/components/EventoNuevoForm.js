import { useState } from 'react';
import './EventoNuevoForm.css';

export default function EventoNuevoForm({ addEvento }) {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');

  const resetForm = () => {
    setTitulo('');
    setFecha('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const evento = {
      titulo: titulo,
      fecha: fecha,
      id: Math.floor(Math.random()*10000)
    };

    addEvento(evento);

    resetForm();
  }

  return (
    <form className='evento-nuevo-form' onSubmit={handleSubmit}>
      <label>
        <span>Título del Evento</span>
        <input type="text"
        onChange={(e)=>setTitulo(e.target.value)}
        value={titulo}
        />
      </label>
      <label>
        <span>Fecha del Evento</span>
        <input type="date"
        onChange={(e)=>setFecha(e.target.value)}
        value={fecha}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
