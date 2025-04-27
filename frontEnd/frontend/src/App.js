import React, { useState, useEffect } from "react";
import "./App.css";
import Forgot from "./form/Forgot";
import Login from "./form/Login";
import Register from "./form/Register";
import Home from "./Home";

function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("auth_token"));
  }, []);

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login setPage={setPage} />;
      case "forgot":
        return <Forgot setPage={setPage} />;
      case "register":
        return <Register setPage={setPage} />;
      default:
        return <Login setPage={setPage} />;
    }
  };

  return (
    <>
      {token ? (
        <Home />
      ) : (
        <div className="min-h-screen bg-yellow-400 flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            {renderPage()}
          </div>
        </div>
      )}
    </>
  );
}

export default App;