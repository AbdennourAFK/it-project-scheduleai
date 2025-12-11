"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [activeRole, setActiveRole] = useState("klant");
  const router = useRouter();

function handleSubmit(e) {
  e.preventDefault();

  if (activeRole === "klant") {
    // Na inloggen als klant → AI Voice Assistant pagina
    router.push("/client/ai-voice-assistant");
  } else {
  }
}


  function goToRegister() {
    if (activeRole === "bedrijf") {
      router.push("/register?type=bedrijf");
    } else {
      router.push("/register?type=klant");
    }
  }

  return (
    <main className="login-page">
      <div className="login-card">
        {/* Logo + Titel */}
        <div className="login-header">
          <div className="login-logo-box">
            <span className="login-logo-icon">📅</span>
          </div>
          <span className="login-logo-text">SchedulAI</span>
        </div>

        <h1 className="login-title">Welkom terug</h1>
        <p className="login-subtitle">Log in om door te gaan</p>

        {/* Rollen (Klant / Bedrijf) */}
        <div className="login-role-toggle">
          <button
            type="button"
            className={`login-role-btn ${activeRole === "klant" ? "login-role-btn-active" : ""}`}
            onClick={() => setActiveRole("klant")}
          >
            Klant
          </button>

          <button
            type="button"
            className={`login-role-btn ${activeRole === "bedrijf" ? "login-role-btn-active" : ""}`}
            onClick={() => setActiveRole("bedrijf")}
          >
            Bedrijf
          </button>
        </div>

        {/* Info-melding op basis van geselecteerde rol */}
        <div className="login-info-box">
          <span className="login-info-dot" />
          <span className="login-info-text">
            {activeRole === "klant"
              ? "Log in om je afspraken te beheren en nieuwe boekingen te maken"
              : "Log in om je dashboard, afspraken en klanten te beheren"}
          </span>
        </div>

        {/* FORMULIER */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <label className="login-label">
            Email
            <div className="login-input-wrapper">
              <span className="login-input-icon">✉️</span>
              <input
                type="email"
                required
                placeholder={
                  activeRole === "klant"
                    ? "jouw@email.nl"
                    : "bedrijf@email.nl"
                }
                className="login-input"
              />
            </div>
          </label>

          {/* Wachtwoord */}
          <label className="login-label">
            Wachtwoord
            <div className="login-input-wrapper">
              <span className="login-input-icon">🔒</span>
              <input
                type="password"
                required
                placeholder={
                  activeRole === "klant"
                    ? "Je wachtwoord"
                    : "Bedrijfswachtwoord"
                }
                className="login-input"
              />
              <button
                type="button"
                className="login-input-icon-button"
                aria-label="wachtwoord tonen"
              >
                👁️
              </button>
            </div>
          </label>

          {/* Onthoud mij + wachtwoord vergeten */}
          <div className="login-row">
            <label className="login-remember">
              <input type="checkbox" />
              <span>Onthoud mij</span>
            </label>

            <button type="button" className="login-link-button">
              Wachtwoord vergeten?
            </button>
          </div>

          {/* Inloggen */}
          <button type="submit" className="login-submit-btn">
            Inloggen <span className="login-submit-arrow">→</span>
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <span className="login-divider-line" />
          <span className="login-divider-text">of</span>
          <span className="login-divider-line" />
        </div>

        {/* Social login */}
        <button type="button" className="login-social-btn">
          <span className="login-social-icon">G</span>
          <span>Doorgaan met Google</span>
        </button>

        <button type="button" className="login-social-btn">
          <span className="login-social-icon"></span>
          <span>Doorgaan met Apple</span>
        </button>

        {/* FOOTER */}
        <p className="login-footer-text">
          Nieuw {activeRole === "bedrijf" ? "bedrijf" : "account"}?
          <button
            type="button"
            className="login-inline-link"
            onClick={goToRegister}
          >
            Registreer als {activeRole === "bedrijf" ? "bedrijf" : "klant"}
          </button>
        </p>

        <p className="login-footer-text">
          {activeRole === "bedrijf"
            ? "Ben je een klant?"
            : "Ben je een bedrijf?"}
          <button
            type="button"
            className="login-inline-link"
            onClick={() =>
              setActiveRole(activeRole === "bedrijf" ? "klant" : "bedrijf")
            }
          >
            Klik hier
          </button>
        </p>
      </div>
    </main>
  );
}
