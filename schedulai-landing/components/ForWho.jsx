export default function ForWho() {
  return (
    <>
      <div className="section-header">
        <div className="section-kicker">Voor wie</div>
        <h2 className="section-title">
          Gebouwd rondom jouw behoeften
        </h2>
        <p className="section-subtitle">
          SchedulAI is ontworpen met de verwachtingen van zowel klanten als
          professionals in gedachten.
        </p>
      </div>

      <div className="forwho-grid">
        <article className="forwho-card">
          <div className="forwho-header">
            <div>
              <div className="forwho-label">Voor klanten zoals Ilyas</div>
              <h3 className="forwho-title">De drukke consument</h3>
            </div>
          </div>

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
        </article>

        <article className="forwho-card right">
          <div className="forwho-header">
            <div>
              <div className="forwho-label">Voor professionals zoals Abdennour</div>
              <h3 className="forwho-title">De manager/professional</h3>
            </div>
          </div>

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
        </article>
      </div>
    </>
  );
}
