// ApiService.js

const API_BASE_URL = "https://playground.4geeks.com/contact";
const API_AGENDAS_URL = `${API_BASE_URL}/agendas`; // URL para crear/consultar agendas

// 👉 Contactos: la URL necesita el slug dinámico, lo recibimos por parámetro
const getContactsUrl = (slug) => `${API_AGENDAS_URL}/${slug}/contacts`;

// Obtener todos los contactos de una agenda
export const getContacts = async (slug) => {
    const response = await fetch(getContactsUrl(slug));
    if (!response.ok) throw new Error("Error al obtener los contactos");
    return await response.json();
};

// Crear nuevo contacto en una agenda
export const createContact = async (slug, contact) => {
    console.log("🟡 Enviando POST al backend para contacto:", contact);
    const response = await fetch(getContactsUrl(slug), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });
    const responseText = await response.text();
    console.log("🔵 Respuesta cruda del servidor (crear contacto):", responseText);
    if (!response.ok) {
        console.error("❌ Error del servidor (crear contacto):", response.status, responseText);
        throw new Error(responseText || "Error al crear el contacto");
    }
    return JSON.parse(responseText);
};

// Editar un contacto
export const editContact = async (slug, id, updatedContact) => {
    const response = await fetch(`${getContactsUrl(slug)}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
    });
    if (!response.ok) throw new Error("Error al editar el contacto");
    return await response.json();
};

// Eliminar un contacto
export const deleteContact = async (slug, id) => {
    const response = await fetch(`${getContactsUrl(slug)}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el contacto");
    return await response.json();
};

// Obtener agenda por slug
export const getAgendaBySlug = async (slug) => {
    try {
        const response = await fetch(`${API_AGENDAS_URL}/${slug}`);
        return response;
    } catch (error) {
        console.error("Error al obtener la agenda:", error);
        throw error;
    }
};

// Crear agenda (CORREGIDO: POST va a /agendas, no a /agendas/slug)
export const createAgenda = async (agendaData) => {
    try {
        const response = await fetch(API_AGENDAS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(agendaData), // Ej: { slug: "jaz01" }
        });
        return response;
    } catch (error) {
        console.error("Error al crear la agenda:", error);
        throw error;
    }
};
