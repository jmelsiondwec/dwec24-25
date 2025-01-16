import './Titulo.css'

export default function Titulo({titulo, subTitulo}) {
  return (
    <div className='titulo-componente'>
      <h1 className="titulo">{titulo}</h1>
      <br />
      <h2 className="subtitulo">{subTitulo}</h2>
    </div>
  )
}