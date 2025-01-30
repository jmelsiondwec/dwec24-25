import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import './AsignaturasLista.css';

export default function AsignaturasLista({actualizar}) {
  const [url, setUrl] = useState('http://localhost:3000/asignaturas');

  const {datos: asignaturas, cargando: cargando, error: error} = useFetch(url, actualizar);

  // Array de dependencias.

  return (
    <div className="asignatura-lista">
      <h2>Listado de Asignaturas</h2>
      {cargando && <div>Cargando Asignaturas...</div>}
      {error && <div>{error}</div>}
      <ul>
        {asignaturas && asignaturas.map(asignatura => (
          <li key={asignatura.id}>
            <h3>{asignatura.nombre}</h3>
            <p>Horas Totales: {asignatura["horas totales"]}</p>
          </li>
        ))}
      </ul>
      <div className="filtros">
        <button onClick={()=>setUrl('http://localhost:3000/asignaturas?idioma=Inglés')}>Inglés</button>
        <button onClick={()=>setUrl('http://localhost:3000/asignaturas')}>Todos</button>
      </div>
    </div>
  )
}
