import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [token] = useContext(UserContext); // Obtener el token del contexto

    const submitRegistration = async () => {
        if (!token) {
            setErrorMessage("Debes estar logueado para registrar un nuevo usuario.");
            return;
        }

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Incluir el token en el encabezado
            },
            body: JSON.stringify({ email: email, hashed_password: password }),
        };

        const response = await fetch("/api/users", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            setErrorMessage(data.detail || "Error al registrar el usuario.");
        } else {
            // Registro exitoso (opcionalmente podrías hacer algo aquí, como limpiar el formulario)
            setErrorMessage("Usuario registrado exitosamente.");
            setEmail("");
            setPassword("");
            setConfirmationPassword("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmationPassword && password.length > 5) {
            submitRegistration();
        } else {
            setErrorMessage(
                "Asegúrate de que las contraseñas coincidan y sean mayores de 5 caracteres"
            );
        }
    };

    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Register</h1>
                <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={confirmationPassword}
                            onChange={(e) => setConfirmationPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <ErrorMessage message={errorMessage} />
                <br />
                <button className="button is-primary" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;