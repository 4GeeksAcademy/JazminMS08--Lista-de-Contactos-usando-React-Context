import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

const BASE_URL = "https://playground.4geeks.com/contact/agendas/jaz01";
const CONTACTS_URL = `${BASE_URL}/contacts`;

export const ContactProvider = ({ children }) => {
  const [contactos, setContactos] = useState([]);

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

  useEffect(() => {
    const inicializar = async () => {
      try {
        let res = await fetch(BASE_URL);
        if (!res.ok) {
          console.log("Agenda no encontrada, creando...");
          const crearRes = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: "jaz01", id: 0 }),
          });
          if (!crearRes.ok) throw new Error("No se pudo crear la agenda");
        } else {
          console.log("✅ Agenda existente.");
        }
        await getContacts();
      } catch (error) {
        console.error("Error al inicializar:", error);
      }
    };

    inicializar();
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
