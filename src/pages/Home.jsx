import Card from "../components/Card.jsx";
import React, { useState, useEffect } from "react";

const BASE_URL_USER = "https://playground.4geeks.com/contact/agendas/jaz01";
const BASE_URL_CONTACTS = "https://playground.4geeks.com/contact/agendas/jaz01/contacts";

export const Home = () => {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        const loadContactos = async () => {
            try {
                // Crear agenda si no existe
                // try {
                //     await fetch(BASE_URL_USER, {
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "application/json"
                //         },
                //         body: JSON.stringify({
                //             slug: "jaz01",
                //             id: 0
                //         })
                //     });
                // } catch (error) {
                //     console.warn("⚠️ La agenda ya existe o no se pudo crear. No es grave.");
                // }

                // Obtener contactos de la agenda
                const response = await fetch(BASE_URL_CONTACTS);
                if (!response.ok) throw new Error("Error al obtener los contactos del usuario");
                const data = await response.json();

                // Guardar los contactos en el estado
                setContactos(data.contacts);
            } catch (error) {
                console.error("Error al cargar contactos:", error);
            }
        };

        loadContactos();
    }, []);

    return (
        <div className="d-flex flex-column align-items-center my-5">
            {contactos.map(contacto => (
                <Card key={contacto.id} contacto={contacto} />
            ))}
        </div>
    );
};