export default function Titulo({titulo, subTitulo}) {
  return (
    <>
      <h1 className="titulo">{titulo}</h1>
      <br />
      <h2 className="subtitulo">{subTitulo}</h2>
    </>
  )
}