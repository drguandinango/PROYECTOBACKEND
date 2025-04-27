import React, { useState } from "react";

export default function Forgot({ setPage }) {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert("If this email exists, a reset link has been sent.");
    setPage("login");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Forgot Password?</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className="text-center mt-6">
          <button type="submit" className="button">
            Send Reset Link
          </button>
          <p className="mt-4 text-sm">
            Remembered?{' '}
            <span onClick={() => setPage("login")} className="underline cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </form>
    </>
  );
}