import Card from "../components/Card.jsx";
import React, { useState, useEffect } from "react";

const BASE_URL_CONTACTS = "https://playground.4geeks.com/contact/agendas/jaz01/contacts";

export const Home = () => {
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContactos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(BASE_URL_CONTACTS);
                if (!response.ok) {
                    throw new Error(`Error al obtener los contactos del usuario: ${response.status}`);
                }
                const data = await response.json();
                setContactos(data); // La API devuelve un array directamente
            } catch (err) {
                setError(err.message);
                console.error("Error al cargar contactos:", err);
            } finally {
                setLoading(false);
            }
        };

        loadContactos();
    }, []);

    if (loading) {
        return <div>Cargando contactos...</div>;
    }

    if (error) {
        return <div>Error al cargar los contactos: {error}</div>;
    }

    return (
        <div className="d-flex flex-column align-items-center my-5">
            {contactos.length > 0 ? (
                contactos.map(contacto => (
                    <Card key={contacto.id} contacto={contacto} />
                ))
            ) : (
                <p>No hay contactos en esta agenda.</p>
            )}
        </div>
    );
};