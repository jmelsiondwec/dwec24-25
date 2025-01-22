import { useState } from 'react';
import './EventoNuevoForm.css';

export default function EventoNuevoForm({ addEvento }) {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [ciudad, setCiudad] = useState('alaior');

  const resetForm = () => {
    setTitulo('');
    setFecha('');
    setCiudad('alaior');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const evento = {
      titulo: titulo,
      fecha: fecha,
      ciudad: ciudad,
      id: Math.floor(Math.random()*10000)
    };

    console.log(evento);

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
      <label>
        <span>Ciudad del Evento</span>
        <select onChange={(e)=>setCiudad(e.target.value)}>
          <option value="alaior">Alaior</option>
          <option value="castell">Es Castell</option>
          <option value="ciutadella">Ciutadella de Menorca</option>
          <option value="ferreries">Ferreries</option>
          <option value="mao">Maó</option>
          <option value="mercadal">Es Mercadal</option>
          <option value="mitjorn">Es Mitjorn</option>
          <option value="santlluis">Sant Lluís</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
