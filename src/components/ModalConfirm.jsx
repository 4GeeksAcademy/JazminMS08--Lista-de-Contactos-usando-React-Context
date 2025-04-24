import React from "react";

const ModalConfirm = ({ show, onClose, onConfirm, mensaje }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop d-flex justify-content-center align-items-center" style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1050
    }}>
      <div className="modal-dialog bg-white rounded shadow p-4" style={{ maxWidth: "400px" }}>
        <h5 className="mb-3">Confirmación</h5>
        <p>{mensaje || "¿Estás seguro de que quieres eliminar este contacto?"}</p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary me-2" onClick={onClose}>Cancelar</button>
          <button className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
