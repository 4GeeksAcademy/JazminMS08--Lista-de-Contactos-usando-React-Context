import { Link } from "react-router-dom";
function Card({ contacto }) {
  return (
    <div className="card shadow-sm w-75 mx-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-2 text-center">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt={contacto.name}
            className="img-fluid rounded-circle m-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mb-1">{contacto.name}</h5>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt me-2"></i>
              {contacto.address}
            </p>
            <p className="mb-1">
              <i className="fas fa-phone-alt me-2"></i>
              {contacto.phone}
            </p>
            <p className="mb-0">
              <i className="fas fa-envelope me-2"></i>
              {contacto.email}
            </p>
          </div>
        </div>
        <div className="col-md-2 text-end pe-3">
          <Link to="/demo">
            <button className="btn btn-link text-dark me-2">
              <i className="fas fa-edit"></i>
            </button>
          </Link>
          <button className="btn btn-link text-danger">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;