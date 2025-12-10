export default function CTA() {
  return (
    <>
      <div className="section-header">
        <button className="btn-primary" style={{ padding: "0.4rem 1rem" }}>
          Begin vandaag
        </button>
        <h2 className="section-title" style={{ marginTop: "1.4rem" }}>
          Klaar om te starten?
        </h2>
        <p className="section-subtitle">
          Kies hoe je SchedulAI wilt gebruiken en begin direct met slimmer
          plannen.
        </p>
      </div>

      <div className="cta-grid">
        <article className="cta-card">
          <div className="cta-tagline">Voor klanten</div>
          <h3 className="cta-title">Klanten Portal</h3>
          <p className="cta-text">
            Boek direct je afspraken 24/7, beheer je agenda en ontvang
            automatische herinneringen.
          </p>

          <ul className="check-list">
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Instant boeken buiten kantooruren.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Keuze tussen AI-bot of digitale agenda.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Automatische herinneringen via SMS/email.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Geen wachttijden aan de telefoon.</span>
            </li>
          </ul>

          <div className="cta-button-row">
            <button className="btn btn-primary">Login als klant</button>
            <button className="btn-ghost">Maak klant account</button>
          </div>
        </article>

        <article className="cta-card right">
          <div className="cta-tagline">Aanbevolen voor bedrijven</div>
          <h3 className="cta-title">Business Dashboard</h3>
          <p className="cta-text">
            Beheer alle afspraken, klanten en je AI assistent vanuit één krachtig
            dashboard.
          </p>

          <ul className="check-list">
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Centraal dashboard met alle boekingen.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Geen dubbele afspraken meer.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Elimineer administratieve last.</span>
            </li>
            <li className="check-item">
              <span className="check-icon">✓</span>
              <span>Zie reden van afspraak voor goede voorbereiding.</span>
            </li>
          </ul>

          <div className="cta-button-row">
            <button className="btn btn-primary">Login als bedrijf</button>
            <button className="btn-ghost">Start gratis proefperiode</button>
          </div>
        </article>
      </div>
    </>
  );
}
