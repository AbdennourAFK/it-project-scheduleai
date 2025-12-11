"use client";

import { useState } from "react";
import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  const [userType, setUserType] = useState(null); // null, "klant", or "bedrijf"

  if (!userType) {
    return (
      <main className="login-page">
        <div className="login-card register-card">
          {/* Logo + Titel */}
          <div className="login-header">
            <div className="login-logo-box">
              <span className="login-logo-icon">📅</span>
            </div>
            <span className="login-logo-text">SchedulAI</span>
          </div>

          <h1 className="login-title">Maak je account</h1>
          <p className="login-subtitle">Kies je accounttype om te beginnen</p>

          {/* Rollen (Klant / Bedrijf) */}
          <div className="login-role-toggle">
            <button
              type="button"
              className="login-role-btn login-role-btn-active"
              onClick={() => setUserType("klant")}
            >
              Klant
            </button>

            <button
              type="button"
              className="login-role-btn"
              onClick={() => setUserType("bedrijf")}
            >
              Bedrijf
            </button>
          </div>

          {/* Info-melding */}
          <div className="login-info-box">
            <span className="login-info-dot" />
            <span className="login-info-text">
              {userType === "klant"
                ? "Maak een account om direct afspraken te kunnen boeken"
                : "Start met SchedulAI en automatiseer je afspraakplanning"}
            </span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "20px" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
        {/* Terug knop */}
        <button
          onClick={() => setUserType(null)}
          style={{
            position: "absolute",
            top: "-40px",
            left: "0",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
            zIndex: 10
          }}
        >
          ← Terug
        </button>
        
        {/* Clerk SignUp */}
        <SignUp
          redirectUrl={userType === "bedrijf" ? "/bedrijf-dashboard" : "/klant-dashboard"}
        />
      </div>
    </div>
  );
}
  }

  function goToLogin() {
    router.push("/login");
  }

  return (
    <main className="login-page">
      <div className="login-card register-card">
        {/* Logo + titel */}
        <div className="login-header">
          <div className="login-logo-box">
            <span className="login-logo-icon">📅</span>
          </div>
          <span className="login-logo-text">SchedulAI</span>
        </div>

        <h1 className="login-title">Maak je account</h1>
        <p className="login-subtitle">Kies je accounttype om te beginnen</p>

        {/* Toggle Klant / Bedrijf */}
        <div className="login-role-toggle">
          <button
            type="button"
            className={
              "login-role-btn " +
              (activeRole === "klant" ? "login-role-btn-active" : "")
            }
            onClick={() => setActiveRole("klant")}
          >
            Klant
          </button>

          <button
            type="button"
            className={
              "login-role-btn " +
              (activeRole === "bedrijf" ? "login-role-btn-active" : "")
            }
            onClick={() => setActiveRole("bedrijf")}
          >
            Bedrijf
          </button>
        </div>

        {/* Info-box onder toggle */}
        <div className="login-info-box">
          <span className="login-info-dot" />
          <span className="login-info-text">
            {activeRole === "klant"
              ? "Maak een account om direct afspraken te kunnen boeken"
              : "Start met SchedulAI en automatiseer je afspraakplanning"}
          </span>
        </div>

        {/* FORMULIER */}
        <form className="login-form" onSubmit={handleSubmit}>
          {activeRole === "klant" ? (
            <>
              {/* KLANT FIELDS */}
              <label className="login-label">
                Volledige naam
                <div className="login-input-wrapper">
                  <span className="login-input-icon">👤</span>
                  <input
                    type="text"
                    required
                    placeholder="Bijv. Sarah Bakker"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Email
                <div className="login-input-wrapper">
                  <span className="login-input-icon">✉️</span>
                  <input
                    type="email"
                    required
                    placeholder="sarah@email.nl"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Telefoonnummer
                <div className="login-input-wrapper">
                  <span className="login-input-icon">📞</span>
                  <input
                    type="tel"
                    required
                    placeholder="+31 6 1234 5678"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Wachtwoord
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type="password"
                    required
                    placeholder="Kies een wachtwoord"
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
              <p className="register-password-hint">Minimaal 8 tekens</p>

              <label className="login-label">
                Bevestig wachtwoord
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type="password"
                    required
                    placeholder="Herhaal je wachtwoord"
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
            </>
          ) : (
            <>
              {/* BEDRIJF FIELDS */}
              <label className="login-label">
                Bedrijfsnaam
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🏢</span>
                  <input
                    type="text"
                    required
                    placeholder="Bijv. Dental Clinic Amsterdam"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Email
                <div className="login-input-wrapper">
                  <span className="login-input-icon">✉️</span>
                  <input
                    type="email"
                    required
                    placeholder="info@bedrijf.nl"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Telefoonnummer
                <div className="login-input-wrapper">
                  <span className="login-input-icon">📞</span>
                  <input
                    type="tel"
                    required
                    placeholder="+31 6 1234 5678"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                KVK-nummer (optioneel)
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🏛️</span>
                  <input
                    type="text"
                    placeholder="12345678"
                    className="login-input"
                  />
                </div>
              </label>

              <label className="login-label">
                Wachtwoord
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type="password"
                    required
                    placeholder="Kies een wachtwoord"
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
              <p className="register-password-hint">Minimaal 8 tekens</p>

              <label className="login-label">
                Bevestig wachtwoord
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type="password"
                    required
                    placeholder="Herhaal je wachtwoord"
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
            </>
          )}

          {/* Voorwaarden */}
          <div className="register-row">
            <label className="register-checkbox">
              <input type="checkbox" required />
              <span>
                Ik ga akkoord met de{" "}
                <button type="button" className="register-link">
                  Algemene Voorwaarden*
                </button>
              </span>
            </label>
          </div>

          {/* Nieuwsbrief / updates */}
          <div className="register-row">
            <label className="register-checkbox">
              <input type="checkbox" />
              <span>
                {activeRole === "klant"
                  ? "Stuur mij afspraakherinneringen en updates"
                  : "Ontvang tips en updates over nieuwe functies"}
              </span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="login-submit-btn">
            Account aanmaken <span className="login-submit-arrow">→</span>
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <span className="login-divider-line" />
          <span className="login-divider-text">of</span>
          <span className="login-divider-line" />
        </div>

        {/* Social logins */}
        <button type="button" className="login-social-btn">
          <span className="login-social-icon">G</span>
          <span>Doorgaan met Google</span>
        </button>

        <button type="button" className="login-social-btn">
          <span className="login-social-icon"></span>
          <span>Doorgaan met Apple</span>
        </button>

        {/* Footer-tekst */}
        <p className="login-footer-text">
          Heb je al een account?
          <button
            type="button"
            className="login-inline-link"
            onClick={goToLogin}
          >
            Log in
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
