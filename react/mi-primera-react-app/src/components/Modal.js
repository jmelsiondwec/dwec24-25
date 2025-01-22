import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({children, destino, esExterno}) {
  return ReactDOM.createPortal((
      <div className="modal-fondo">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: esExterno ? "#ff4500" : "#555",
          textAlign: "center"
        }}>
          {children}
        </div>
      </div>
  ), destino)
}
