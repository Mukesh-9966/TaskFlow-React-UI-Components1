import "./Modal.css";

function Modal({ show, children }) {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default Modal;