import React, { useContext, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";

const App = () => {
    const [message, setMessage] = useState("");
    const [token] = useContext(UserContext);

    const getWelcomeMessage = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("/api", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            console.log("something messed up with welcome message");
        } else {
            setMessage(data.message);
        }
    };

    useEffect(() => {
        getWelcomeMessage();
    }, []);

    return (
        <>
            <Header title={message} />
            <div className="columns is-centered"> {/* Centramos las columnas */}
                <div className="column m-5 is-two-thirds">
                    {!token ? (
                        <div className="columns is-centered"> {/* Centramos el login también */}
                            <div className="column is-half">
                                <Login />
                            </div>
                        </div>
                    ) : (
                        <div className="columns is-centered"> {/* Centramos el formulario de registro */}
                            <div className="column is-half">
                                <Register />
                            </div>
                            {/* Ocultamos la tabla de leads */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;