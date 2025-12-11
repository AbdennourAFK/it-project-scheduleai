"use client";

import { useState } from "react";
import { SignUp, SignIn } from "@clerk/nextjs";

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(null); // null, "login", or "register"
  const [userType, setUserType] = useState(null); // null, "klant", or "bedrijf"

  const handleLoginClick = () => {
    setShowAuthModal("login");
    setUserType(null);
  };

  const handleRegisterClick = () => {
    setShowAuthModal("register");
    setUserType(null);
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleBack = () => {
    setUserType(null);
  };

  const closeModal = () => {
    setShowAuthModal(null);
    setUserType(null);
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div className="nav-left">
            <div className="logo-box">
              <span className="logo-icon">S</span>
            </div>
            <span className="logo-text">SchedulAI</span>

            <nav className="nav-links">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#how-it-works" className="nav-link">
                Hoe het werkt
              </a>
              <a href="#for-who" className="nav-link">
                Voor wie
              </a>
              <a href="#pricing" className="nav-link">
                Prijzen
              </a>
            </nav>
          </div>

          <div className="nav-right">
            <button onClick={handleRegisterClick} className="btn btn-outline">
              Registreer
            </button>
            <button onClick={handleLoginClick} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Modal Overlay */}
      {showAuthModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "40px",
              maxWidth: "500px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666"
              }}
            >
              ×
            </button>

            {!userType ? (
              /* User Type Selection */
              <div style={{ textAlign: "center" }}>
                <h2 style={{ marginBottom: "10px", color: "#333" }}>
                  {showAuthModal === "login" ? "Inloggen als" : "Registreer als"}
                </h2>
                <p style={{ color: "#666", marginBottom: "30px" }}>
                  Kies je accounttype
                </p>

                <button
                  onClick={() => handleUserTypeSelect("klant")}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "2px solid #ff8c42",
                    backgroundColor: "#fff",
                    color: "#ff8c42",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Klant
                </button>

                <button
                  onClick={() => handleUserTypeSelect("bedrijf")}
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "2px solid #ff8c42",
                    backgroundColor: "#fff",
                    color: "#ff8c42",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Bedrijf
                </button>
              </div>
            ) : (
              /* Clerk Auth Component */
              <div>
                <button
                  onClick={handleBack}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ff8c42",
                    cursor: "pointer",
                    fontSize: "14px",
                    marginBottom: "20px"
                  }}
                >
                  ← Terug
                </button>

                {showAuthModal === "login" ? (
                  <SignIn
                    redirectUrl={userType === "bedrijf" ? "/bedrijf-dashboard" : "/klant-dashboard"}
                  />
                ) : (
                  <SignUp
                    redirectUrl={userType === "bedrijf" ? "/bedrijf-dashboard" : "/klant-dashboard"}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
