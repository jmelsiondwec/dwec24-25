import { useState } from 'react';
import './App.css'
import Carta from './components/Carta';

function App() {
  
  const [cartas, setCartas] = useState([]);

  const mezclaCartas = () => {
    const cartasMezcladas = [...imagenes, ...imagenes]
    .sort(()=>Math.random() - 0.5)
    .map(carta => ({...carta, id: Math.floor(Math.random()*10000)}));

    setCartas(cartasMezcladas);
  }

  console.log(cartas);

  const imagenes = [
    {"src": "/img/baloncesto.png"},
    {"src": "/img/bolos.png"},
    {"src": "/img/futbol.png"},
    {"src": "/img/golf.png"},
    {"src": "/img/rugby.png"},
    {"src": "/img/tenis.png"}
  ];

  return (
    <div className='App'>
      <h1>Joc de Memòria</h1>
      <button onClick={mezclaCartas}>Mezclar Cartas</button>

      <div className='card-grid'>
        {
          cartas.map(carta => (
            <Carta carta={carta} key={carta.id} />
          ))
        }
      </div>
    </div>
  )
}

export default App
