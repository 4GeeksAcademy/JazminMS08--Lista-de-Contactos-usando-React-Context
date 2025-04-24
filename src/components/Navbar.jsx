import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h2 className="m-0">Lista de contactos con React</h2>
        <Link to="/add" className="btn btn-success">
          + Agregar Contacto
        </Link>
      </div>
    </nav>
  );
};