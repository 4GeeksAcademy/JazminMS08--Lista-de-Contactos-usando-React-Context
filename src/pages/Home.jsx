import React from "react";
import { useContacts } from "../context/ContactContext.jsx";
import Card from "../components/Card.jsx";

const Home = () => {
  const { contacts } = useContacts();

  return (
    <div className="container">
      <h1>Agenda</h1>
      <div className="d-flex flex-column align-items-center">
        {contacts.map((contacto) => (
          <Card key={contacto.id} contacto={contacto} />
        ))}
      </div>
    </div>
  );
};

export default Home;

