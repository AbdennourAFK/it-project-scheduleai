export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker">AI-Powered Planning</div>

          <h1 className="hero-title">Afspraken plannen zonder wrijving</h1>

          <p className="hero-subtitle">
            SchedulAI combineert slimme AI-triage met foutloze synchronisatie.
            Geef je klanten 24/7 boekingsmogelijkheden zonder dubbele
            afspraken.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">Probeer gratis</button>
            <button className="btn btn-secondary">Bekijk demo</button>
          </div>

          <p className="hero-note">
            AI-triage, realtime synchronisatie en automatische herinneringen in
            één platform.
          </p>
        </div>

        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-card-icon orange">
              <span role="img" aria-label="assistant">
                💼
              </span>
            </div>
            <h3 className="hero-card-title">AI Assistent</h3>
            <p className="hero-card-text">
              24/7 beschikbaar voor vragen en directe boekingen via een
              slimme bot.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon blue">
              <span role="img" aria-label="sync">
                ⚡
              </span>
            </div>
            <h3 className="hero-card-title">Real-time Sync</h3>
            <p className="hero-card-text">
              Foutloze synchronisatie met je agenda zodat tijden altijd kloppen.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon purple">
              <span role="img" aria-label="triage">
                📅
              </span>
            </div>
            <h3 className="hero-card-title">Smart Triage</h3>
            <p className="hero-card-text">
              Routeert vragen en boekt direct passende tijdsloten zonder
              handwerk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
