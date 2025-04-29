import React, { useContext, useEffect, useState } from "react";

const App=()=> {
  const [message, setMessage] = useState("");
 // const [token] = useContext(UserContext);

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
      getWelcomeMessage();
  }, []);

  return (
    <div>
      <h1>HOLA minos</h1>
    </div>
  );
};

export default App;
