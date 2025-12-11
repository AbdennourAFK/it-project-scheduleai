"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
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
          <SignUpButton mode="modal">
            <button className="btn btn-outline">Registreer</button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="btn btn-primary">Login</button>
          </SignInButton>
        </div>
      </div>
    </header>
  );
}
