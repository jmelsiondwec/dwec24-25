import React, { useState } from 'react';
import Bienvenida from './Bienvenida';
import Pildoras from './Pildoras';

function App() {
  const [mensaje, setMensaje] = useState("Bienvenido a Matrix. ¿Estás listo para decidir?");
  const [pildoras, setPildoras] = useState({roja: 0, azul:0});

  const tomarPildora = (tipo) => {
    setPildoras((estadoPrevio) => ({
      ...estadoPrevio,
      [tipo]: estadoPrevio[tipo] + 1
    }));

    setMensaje(
      tipo === "roja" ?
        "Has tomado la pastilla roja, bienvenido al mundo real."
        : "Has tomado la pastilla azul, quédate en la ilusión."
    )
  }

  return (
    <div style={{
                textAlign: "center",
                fontFamily: "Arial, sans-serif"
    }}>
      <h1>Matrix App</h1>
      <p>{mensaje}</p>
      <Bienvenida />
      <Pildoras tomarPildora={tomarPildora} />
    </div>
  );
}

export default App;
