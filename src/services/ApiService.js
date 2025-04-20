const API_BASE_URL = "https://playground.4geeks.com/contact/agendas/jaz01";

// Obtener todos los contactos
export const getContacts = async () => {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error("Error al obtener los contactos");
    return await response.json();
};

// Crear un nuevo contacto
export const createContact = async (contact) => {
    const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
    });
    if (!response.ok) throw new Error("Error al crear el contacto");
    return await response.json();
};

// Editar un contacto existente
export const editContact = async (id, updatedContact) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
    });
    if (!response.ok) throw new Error("Error al editar el contacto");
    return await response.json();
};


export const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Error al eliminar contacto");
      }
    } catch (error) {
      throw error;
    }
  };
  

  

