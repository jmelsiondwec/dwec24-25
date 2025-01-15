import React from "react";

const Pildoras = ({ tomarPildora }) => {
  return ( 
    <div>
      <h2>Elige tu píldora</h2>
      <button
        style={{
          backgroundColor:"red",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={()=>tomarPildora("roja")}
      >Píldora Roja
      </button>
      <button
        style={{
          backgroundColor:"blue",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={()=>tomarPildora("azul")}
      >Píldora Azul
      </button>
    </div>
  );
}
 
export default Pildoras;