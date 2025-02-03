import './Carta.css';

export default function Carta({carta}) {
  return (
    <div className='card'>
      <div>
        <img src={carta.src} alt="frontal" />
        <img src="./img/cubierta.png" alt="cubierta" />
      </div>
    </div>
  )
}
