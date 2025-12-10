export default function Pricing() {
  return (
    <>
      <div className="section-header">
        <div className="badge-pill">Flexibele Prijsopties</div>
        <h2 className="section-title">Kies het plan dat bij je past</h2>
        <p className="section-subtitle">
          Van startende professionals tot grote organisaties - SchedulAI groeit
          mee met jouw ambities. Alle plannen bevatten 24/7 AI support,
          real-time synchronisatie en nul dubbele boekingen.
        </p>
      </div>

      <div className="pricing-grid">
        <article className="price-card">
          <div>
            <h3 className="price-name">Starter</h3>
            <div className="price-label">
              Voor kleine bedrijven en zelfstandigen
            </div>

            <div className="price-value">€29</div>
            <div className="price-period">per maand</div>

            <ul className="price-list">
              <li className="price-item">
                <span className="price-item-dot" />
                <span>24/7 AI Assistent voor afspraken.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Real-time agenda synchronisatie.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Tot 100 boekingen per maand.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Basis dashboard.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Email herinneringen.</span>
              </li>
            </ul>
          </div>

          <div className="price-cta">
            <button className="btn-ghost">Start Gratis Proefperiode</button>
          </div>
        </article>

        <article className="price-card highlight">
          <div className="price-badge">Populair</div>

          <div>
            <h3 className="price-name">Professional</h3>
            <div className="price-label">Voor groeiende bedrijven</div>

            <div className="price-value">€79</div>
            <div className="price-period">per maand</div>

            <ul className="price-list">
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Alles van Starter.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Onbeperkte boekingen.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>SMS + Email herinneringen.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Geavanceerd dashboard &amp; analytics.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Meerdere teamleden.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Priority support.</span>
              </li>
            </ul>
          </div>

          <div className="price-cta">
            <button className="btn btn-primary">Kies Professional</button>
          </div>
        </article>

        <article className="price-card">
          <div>
            <h3 className="price-name">Enterprise</h3>
            <div className="price-label">Voor grote organisaties</div>

            <div className="price-value">€199</div>
            <div className="price-period">per maand</div>

            <ul className="price-list">
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Alles van Professional.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Onbeperkte AI-gesprekken.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>White-label oplossing.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Dedicated account manager.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>Custom integraties.</span>
              </li>
              <li className="price-item">
                <span className="price-item-dot" />
                <span>SLA garantie.</span>
              </li>
            </ul>
          </div>

          <div className="price-cta">
            <button className="btn btn-primary">Neem Contact Op</button>
          </div>
        </article>
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.8rem",
          textAlign: "center",
          color: "#9ca3af"
        }}
      >
        Live sync met agenda - geen dubbele boekingen mogelijk.
      </p>
    </>
  );
}
