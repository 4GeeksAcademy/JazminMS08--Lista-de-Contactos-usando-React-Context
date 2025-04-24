import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContact } from "../services/apiService";

export const CreateContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            agenda_slug: "jaz01",
        };

        // Validación simple
        for (const [key, value] of Object.entries(dataToSend)) {
            if (!value) {
                alert(`El campo "${key}" está vacío`);
                return;
            }
        }

        try {
            console.log("🟡 Enviando contacto:", dataToSend);
            const response = await createContact(dataToSend);
            console.log("✅ Contacto creado:", response);
            alert("Contacto creado con éxito");

            // Redirigir al home con estado para recarga
            navigate("/", { state: { contactoNuevo: true } });
        } catch (error) {
            console.error("❌ Error al crear el contacto:", error.message);
            alert("Error al crear el contacto: " + error.message);
        }
    };

    return (
        <div className="container my-5">
            <h1>Crear Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>
    );
};