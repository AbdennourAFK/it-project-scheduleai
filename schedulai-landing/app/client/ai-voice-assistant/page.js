export default function AIVoiceAssistantPage() {
  return (
    <main className="client-page">
      {/* Top bar */}
      <header className="client-topbar">
        <div className="client-topbar-left">
          <div className="logo-box">
            <span className="logo-icon">S</span>
          </div>
          <span className="logo-text">SchedulAI</span>
        </div>

        <div className="client-topbar-right">
          <button className="client-icon-button" aria-label="Notificaties">
            🔔
          </button>
          <div className="client-user-pill">
            <span className="client-user-avatar">AB</span>
            <span className="client-user-name">Abdennour</span>
          </div>
        </div>
      </header>

      {/* Terug-link */}
      <button className="client-back-link">
        ← Terug
      </button>

      {/* Titel + subtitle */}
      <section className="client-header-section">
        <div className="client-breadcrumb-row">
          <span className="client-breadcrumb-icon">🔊</span>
          <span className="client-breadcrumb-text">Voice Assistant</span>
        </div>

        <h1 className="client-page-title">AI Voice Assistant</h1>
        <p className="client-page-subtitle">
          Laat je AI assistent direct telefonisch afspraken maken - 24/7 beschikbaar voor je klanten
        </p>

        {/* Toggle knoppen */}
        <div className="client-toggle-row">
          <button className="client-toggle-btn client-toggle-btn-active">
            AI Assistent
          </button>
          <button className="client-toggle-btn">
            Handmatige Boeking
          </button>
        </div>
      </section>

      {/* Main content: 2 kolommen */}
      <section className="client-main">
        {/* LINKERKOLOM */}
        <div className="client-column-left">
          {/* Hoofdkaart: AI Voice Assistant */}
          <div className="client-card client-card-main">
            <div className="client-card-header">
              <div className="client-card-title-row">
                <div className="client-icon-circle client-icon-circle-orange">
                  ☎
                </div>
                <div>
                  <h2 className="client-card-title">AI Voice Assistant</h2>
                  <p className="client-card-subtitle">
                    Altijd bereikbaar voor je klanten
                  </p>
                </div>
              </div>

              <div className="client-status-pill">
                <span className="client-status-dot" />
                <span>Actief</span>
              </div>
            </div>

            {/* New AI Chat blok */}
            <div className="client-inner-card">
              <div className="client-inner-card-header">
                <span className="client-inner-card-label">🆕 New AI Chat</span>
                <span className="client-inner-card-sub">
                  Start een nieuw gesprek via AI
                </span>
              </div>
              <ul className="client-list">
                <li>Laat AI automatisch je afspraken boeken</li>
                <li>Real-time sync met je Google Calendar</li>
                <li>AI powered business flow via AI</li>
                <li>Volledig geautomatiseerde interacties</li>
              </ul>
            </div>

            {/* Features in kolom */}
            <div className="client-feature-grid">
              <div className="client-feature-card">
                <div className="client-feature-icon client-feature-icon-blue">
                  ⏱
                </div>
                <h3 className="client-feature-title">
                  Real-time Sync &amp; Scheduling
                </h3>
                <p className="client-feature-text">
                  Direct gekoppeld aan je agenda voor live beschikbaarheid.
                </p>
              </div>

              <div className="client-feature-card">
                <div className="client-feature-icon client-feature-icon-purple">
                  ⚙
                </div>
                <h3 className="client-feature-title">
                  AI powers your workflow
                </h3>
                <p className="client-feature-text">
                  Intelligente automatisering, volledig afgestemd op jouw praktijk.
                </p>
              </div>

              <div className="client-feature-card">
                <div className="client-feature-icon client-feature-icon-green">
                  🤖
                </div>
                <h3 className="client-feature-title">
                  Automated Interactions
                </h3>
                <p className="client-feature-text">
                  Volledige gespreksafhandeling, inclusief bevestigingen.
                </p>
              </div>
            </div>

            {/* Onderste rij: Abdennour AI vs You */}
            <div className="client-call-footer">
              <div className="client-call-info">
                <div>
                  <p className="client-call-label">Abdennour AI</p>
                  <p className="client-call-role">Dental Assistant</p>
                  <p className="client-call-phone">+31 6 1234 5678</p>
                </div>
              </div>

              <div className="client-call-info client-call-info-right">
                <div>
                  <p className="client-call-label">You</p>
                  <p className="client-call-role">Call now</p>
                  <button className="client-inline-link">
                    Direct bellen
                  </button>
                </div>
              </div>
            </div>

            <button className="client-primary-btn client-startcall-btn">
  <span className="client-startcall-icon">🎤</span>
  <span>Start Call</span>
</button>

          </div>
        </div>

        {/* RECHTERKOLOM */}
        <div className="client-column-right">
          {/* Hoe werkt het? */}
          <div className="client-card">
            <div className="client-card-header-row">
              <span className="client-card-header-icon">❓</span>
              <h2 className="client-card-header-title">Hoe werkt het?</h2>
            </div>

            <ol className="client-steps-list">
              <li>
                <div className="client-step-number">1</div>
                <div>
                  <p className="client-step-title">Bel het nummer</p>
                  <p className="client-step-text">
                    Klik op &quot;Start Call&quot; of bel direct naar het aangegeven nummer.
                  </p>
                </div>
              </li>
              <li>
                <div className="client-step-number">2</div>
                <div>
                  <p className="client-step-title">Spreek met AI</p>
                  <p className="client-step-text">
                    Vertel wanneer je een afspraak wilt maken - de AI begrijpt je direct.
                  </p>
                </div>
              </li>
              <li>
                <div className="client-step-number">3</div>
                <div>
                  <p className="client-step-title">Bevestiging</p>
                  <p className="client-step-text">
                    Je krijgt direct een bevestiging van je afspraak per e-mail.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Voordelen */}
          <div className="client-card">
            <h2 className="client-card-header-title">Voordelen</h2>
            <ul className="client-benefits-list">
              <li>
                <span className="client-benefit-icon">🕒</span>
                <div>
                  <p className="client-benefit-title">24/7 Beschikbaar</p>
                  <p className="client-benefit-text">
                    Maak een afspraak wanneer het jou uitkomt.
                  </p>
                </div>
              </li>
              <li>
                <span className="client-benefit-icon">⚡</span>
                <div>
                  <p className="client-benefit-title">Direct ingepland</p>
                  <p className="client-benefit-text">
                    Geen wachttijden, direct een afspraak.
                  </p>
                </div>
              </li>
              <li>
                <span className="client-benefit-icon">🔒</span>
                <div>
                  <p className="client-benefit-title">Veilig &amp; privé</p>
                  <p className="client-benefit-text">
                    Je gegevens zijn volledig beveiligd.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div className="client-card client-card-warning">
            <div className="client-card-header-row">
              <span className="client-card-header-icon">⚠</span>
              <h2 className="client-card-header-title">
                Tips voor het beste resultaat
              </h2>
            </div>
            <ul className="client-tips-list">
              <li>Spreek duidelijk en rustig.</li>
              <li>Vermeld je gewenste datum en tijd.</li>
              <li>Houd je gegevens bij de hand.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
