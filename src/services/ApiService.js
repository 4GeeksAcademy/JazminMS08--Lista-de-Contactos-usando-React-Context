const API_CONTACTS_URL = "https://playground.4geeks.com/contact/agendas/juanpass/contacts";

// Obtener todos los contactos
export const getContacts = async () => {
    const response = await fetch(API_CONTACTS_URL);
    if (!response.ok) throw new Error("Error al obtener los contactos");
    return await response.json();
};

// Crear nuevo contacto
export const createContact = async (contact) => {
    console.log("🟡 Enviando POST al backend:", contact);

    const response = await fetch(API_CONTACTS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });

    const responseText = await response.text();
    console.log("🔵 Respuesta cruda del servidor:", responseText);

    if (!response.ok) {
        console.error("❌ Error del servidor:", response.status, responseText);
        throw new Error(responseText || "Error al crear el contacto");
    }

    return JSON.parse(responseText);
};

// Editar un contacto
export const editContact = async (id, updatedContact) => {
    const response = await fetch(`${API_CONTACTS_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
    });

    if (!response.ok) throw new Error("Error al editar el contacto");
    return await response.json();
};

// Eliminar un contacto
export const deleteContact = async (id) => {
    const response = await fetch(`${API_CONTACTS_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el contacto");
    return await response.json();
};