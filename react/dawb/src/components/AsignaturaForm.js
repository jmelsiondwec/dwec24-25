import React, { use, useState } from 'react'
import './AsignaturaForm.css'

export default function AsignaturaForm({setActualizar}) {
  const [nombre, setNombre] = useState("");
  const [horasTotales, setHorasTotales] = useState("0");
  const [idioma, setIdioma] = useState("Catalán");
  const [isSend, setIsSend] = useState(false);

  const addAsignatura = async (asignatura) => {
    try {
      const response = await fetch('http://localhost:3000/asignaturas',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(asignatura)
        }
      );

      if(!response.ok) {
        throw new Error("Error al añadir la Asignatura");
      }

      setIsSend(true);
      setTimeout(()=>setIsSend(false), 2000);

      setActualizar((actualizarPrevio)=> !actualizarPrevio);

    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const asignatura = {
      nombre: nombre,
      "horas totales": horasTotales,
      idioma: idioma,
      id: Math.floor(Math.random()*1000)
    }

    addAsignatura(asignatura);

    resetForm();
  }

  const resetForm = () => {
    setNombre("");
    setHorasTotales("0");
    setIdioma("Catalán");
  }

  return (
    <form className='asignatura-form' onSubmit={handleSubmit}>
      <label>
        <span>Nombre de la Asignatura</span>
        <input type="text"
        onChange={(e)=>setNombre(e.target.value)}
        value={nombre} />
      </label>
      <label>
        <span>Horas Totales de la Asignatura</span>
        <input type="number"
        onChange={(e)=>setHorasTotales(e.target.value)}
        value={horasTotales} />
      </label>
      <label>
        <span>Idioma de la Asignatura</span>
        <select onChange={(e)=>setIdioma(e.target.value)}>
          <option value="Catalán">Catalán</option>
          <option value="Inglés">Inglés</option>
        </select>
      </label>
      <button>Guardar</button>
      {isSend && <p>¡Asignatura añadida!</p>}
    </form>
  )
}
