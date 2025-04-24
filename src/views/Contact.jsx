import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const Contact = () => {
  const { contactos } = useContext(ContactContext);

  return (
    <div className="container my-5">
      
      {contactos.length === 0 ? (
        <p className="text-muted">No tienes ningún contacto agregado.</p>
      ) : (
        <div className="d-flex flex-column align-items-center gap-3">
          {contactos.map(contacto => (
            <ContactCard key={contacto.id} contacto={contacto} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;