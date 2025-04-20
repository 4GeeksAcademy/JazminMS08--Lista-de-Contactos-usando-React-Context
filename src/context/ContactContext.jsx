import { createContext, useContext, useState, useEffect } from "react";
import { getContacts, deleteContact } from "../services/ApiService";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const result = await getContacts("jaz01");
      setContacts(result.contacts);
    } catch (err) {
      console.error("Error al cargar contactos:", err);
    }
  };

  const removeContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts(prev => prev.filter(c => c.id !== id)); // remueve del estado
    } catch (err) {
      console.error("Error al eliminar contacto:", err);
    }
  };
  

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, loadContacts, removeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
