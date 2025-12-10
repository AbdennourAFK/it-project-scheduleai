import Link from "next/link";

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
          <Link href="/register" className="btn btn-outline">
            Registreer
          </Link>
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
