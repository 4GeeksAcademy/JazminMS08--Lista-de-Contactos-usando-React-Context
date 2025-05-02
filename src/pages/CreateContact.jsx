import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

export const CreateContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { createContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`El campo "${key}" está vacío`);
        return;
      }
    }

    try {
      console.log("🟡 Enviando contacto:", formData);
      await createContact(formData);
      alert("Contacto creado con éxito");
      navigate("/", { state: { contactoNuevo: true } });
    } catch (error) {
      console.error("❌ Error al crear el contacto:", error);
      alert("Error al crear el contacto: " + error.message);
    }
  };

  return (
    <div className="container my-5">
      <h1>Crear Contacto</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos de formulario */}
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};
