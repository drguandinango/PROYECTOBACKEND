import React, { useContext, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import ErrorMessage from "./components/ErrorMessage"; // Importa ErrorMessage si no lo tienes aquí

const App = () => {
    const [message, setMessage] = useState("");
    const [token] = useContext(UserContext);
    const [leadsError, setLeadsError] = useState(""); // Estado para el error de leads

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
            <div className="columns">
                <div className="column"></div>
                <div className="column m-5 is-two-thirds">
                    {!token ? (
                        <div className="columns">
                            <Login />
                        </div>
                    ) : (
                        <div className="columns">
                            <div className="column is-half">
                                <Register />
                            </div>
                            {/* Ocultamos la tabla y el mensaje de error de leads */}
                            {/* {leadsError && <ErrorMessage message={leadsError} />} */}
                            {/* <div className="column is-half">
                                <Table />
                            </div> */}
                        </div>
                    )}
                </div>
                <div className="column"></div>
            </div>
        </>
    );
};

export default App;