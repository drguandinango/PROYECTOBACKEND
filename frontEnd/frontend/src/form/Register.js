import React, { useState } from "react";

export default function Register({ setPage }) {
  const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.username || !form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }
    alert("Registration successful! Please log in.");
    setPage("login");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input"
          value={form.name}
          onChange={e => handleChange("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={form.username}
          onChange={e => handleChange("username", e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={e => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={form.password}
          onChange={e => handleChange("password", e.target.value)}
        />
        <div className="text-center mt-6">
          <button type="submit" className="button">
            Create Account
          </button>
          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <span onClick={() => setPage("login")} className="underline cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
