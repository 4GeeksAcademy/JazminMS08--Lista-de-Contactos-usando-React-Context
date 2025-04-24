import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

const BASE_URL = "https://playground.4geeks.com/contact/agendas/jaz01";
const CONTACTS_URL = `${BASE_URL}/contacts`;

export const ContactProvider = ({ children }) => {
  const [contactos, setContactos] = useState([]);

  // Crear la agenda si no existe
  const crearAgenda = async () => {
    try {
      await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "jaz01", id: 0 }),
      });
    } catch (error) {
      console.warn("⚠️ La agenda ya existe o no se pudo crear.");
    }
  };

  // Obtener contactos
  const getContacts = async () => {
    try {
      const res = await fetch(CONTACTS_URL);
      if (!res.ok) throw new Error("Error al obtener contactos");
      const data = await res.json();
      setContactos(data.contacts || []);
    } catch (error) {
      console.error("Error al cargar contactos:", error);
    }
  };

  // Crear contacto
  const createContact = async (contact) => {
    try {
      const res = await fetch(CONTACTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: "jaz01" }),
      });
      if (!res.ok) throw new Error("Error al crear contacto");
      await getContacts();
    } catch (error) {
      console.error("Error al crear contacto:", error);
    }
  };

  // Actualizar contacto
  const updateContact = async (id, updatedInfo) => {
    try {
      const res = await fetch(`${CONTACTS_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedInfo, agenda_slug: "jaz01" }),
      });
      if (!res.ok) throw new Error("Error al actualizar contacto");
      await getContacts();
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
    }
  };

  // Eliminar contacto
  const deleteContact = async (id) => {
    try {
      const res = await fetch(`${CONTACTS_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar contacto");
      await getContacts();
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };

  // Carga inicial
  useEffect(() => {
    crearAgenda().then(getContacts);
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contactos,
        getContacts,
        createContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
