import React, { useState } from "react";

export default function Login({ setPage }) {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleChange = (field, value) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!loginForm.username || !loginForm.password) {
      alert("Please enter both username and password.");
      return;
    }
    // Simulate login: store a dummy token
    localStorage.setItem("auth_token", "demo-token");
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={loginForm.username}
          onChange={e => handleChange("username", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={loginForm.password}
          onChange={e => handleChange("password", e.target.value)}
        />
        <div className="text-center mt-6">
          <button type="submit" className="button">
            Sign In
          </button>
          <p className="mt-4 text-sm">
            Don't have an account?{' '}
            <span onClick={() => setPage("register")} className="underline cursor-pointer">
              Register
            </span>
          </p>
          <p className="mt-2 text-sm">
            Forgot Password?{' '}
            <span onClick={() => setPage("forgot")} className="underline cursor-pointer">
              Recover
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
