import './Modal.css';

export default function Modal({children}) {
  return (
    <div>
      <div className="modal-fondo">
        <div className="modal">
          {children}
        </div>
      </div>
    </div>
  )
}
