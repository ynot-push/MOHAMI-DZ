import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("client"); // "client" | "lawyer"
  const [mode, setMode] = useState("signin"); // "signin" | "register"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mode === "register" && form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    if (!emailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (mode === "register" && form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  // Where each role lands once authenticated.
  // Lawyers land on their worktable (their dashboard) when signing in,
  // or on their profile setup when creating a brand-new account.
  // Clients land on the regular client-facing homepage.
  const destinationFor = (role, mode) => {
    if (role === "lawyer") {
      return mode === "signin" ? "/lawyer/worktable" : "/lawyer/edit_profil";
    }
    return "/Home";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // NOTE: this project has no backend/API wired up yet.
      // Hook the real authentication call up here (e.g. axios.post('/api/auth/...', { ...form, role }))
      // and only navigate once the server confirms the account/role.
      setSubmitted(true);
      setTimeout(() => navigate(destinationFor(role, mode)), 1200);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="login_page">
      <div className="login_card">
        <h1>{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
        <p className="login_subtitle">
          {mode === "signin"
            ? "Sign in to find your suitable lawyer."
            : "Join Mohami DZ to get started."}
        </p>

        <div className="role_toggle" role="tablist" aria-label="Account type">
          <button
            type="button"
            className={role === "client" ? "role_option active" : "role_option"}
            onClick={() => setRole("client")}
          >
            I'm a Client
          </button>
          <button
            type="button"
            className={role === "lawyer" ? "role_option active" : "role_option"}
            onClick={() => setRole("lawyer")}
          >
            I'm a Lawyer
          </button>
        </div>

        <div className="login_tabs">
          <button
            type="button"
            className={mode === "signin" ? "tab active" : "tab"}
            onClick={() => switchMode("signin")}
          >
            Sign in
          </button>
          <button
            type="button"
            className={mode === "register" ? "tab active" : "tab"}
            onClick={() => switchMode("register")}
          >
            Create account
          </button>
        </div>

        <form className="login_form" onSubmit={handleSubmit} noValidate>
          {mode === "register" && (
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
              {errors.name && <span className="field_error">{errors.name}</span>}
            </div>
          )}

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="field_error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="field_error">{errors.password}</span>
            )}
          </div>

          {mode === "register" && (
            <div className="field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <span className="field_error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          {submitted && (
            <p className="login_success">
              {mode === "signin" ? "Signed in" : "Account created"} as{" "}
              {role === "lawyer" ? "a lawyer" : "a client"}! Redirecting…
            </p>
          )}

          <button type="submit" className="login_submit">
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
