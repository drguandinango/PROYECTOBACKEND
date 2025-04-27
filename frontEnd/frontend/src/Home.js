import React from 'react';

export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome Home! 🎉</h1>
      <p className="mb-6">You are now logged in without a backend database.</p>
      <button onClick={handleLogout} className="button">
        Logout
      </button>
    </div>
  );
}
