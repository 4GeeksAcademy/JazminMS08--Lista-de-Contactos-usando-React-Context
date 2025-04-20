// context/ContactContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import {
  getContacts,
  createContact,
  deleteContact,
  editContact
} from "../services/ApiService";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const result = await getContacts();
      setContacts(result.contacts || []);
    } catch (err) {
      console.error("Error al cargar contactos:", err);
    }
  };

  const addContact = async (newContact) => {
    try {
      await createContact(newContact);
      await loadContacts(); // actualiza la lista
    } catch (err) {
      console.error("Error al agregar contacto:", err);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      await editContact(id, updatedContact);
      await loadContacts(); // actualiza la lista
    } catch (err) {
      console.error("Error al actualizar contacto:", err);
    }
  };

  const removeContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Error al eliminar contacto:", err);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        loadContacts,
        addContact,
        updateContact,
        removeContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);

