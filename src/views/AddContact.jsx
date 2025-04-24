import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

const AddContact = () => {
  const { createContact, updateContact, contactos } = useContext(ContactContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const editing = Boolean(id);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    if (editing) {
      const contacto = contactos.find(c => c.id === parseInt(id));
      if (contacto) {
        setForm({
          name: contacto.name,
          address: contacto.address,
          phone: contacto.phone,
          email: contacto.email
        });
      }
    }
  }, [id, contactos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      await updateContact(id, form);
    } else {
      await createContact(form);
    }

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>{editing ? "Editar Contacto" : "Agregar Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre Completo</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Dirección</label>
          <input
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {editing ? "Actualizar" : "Guardar"}
        </button>
        <button
          className="btn btn-secondary ms-2"
          type="button"
          onClick={() => navigate("/")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default AddContact;