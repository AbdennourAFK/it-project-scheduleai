export default function HowItWorks() {
  return (
    <>
      <div className="section-header">
        <div className="section-kicker">Hoe het werkt</div>
        <h2 className="section-title">
          Van eerste contact tot bevestigde afspraak in vier eenvoudige stappen
        </h2>
      </div>

      <div className="hiw-steps">
        <article className="hiw-card">
          <div className="hiw-number">01</div>
          <h3 className="hiw-title">Klant neemt contact op</h3>
          <p className="hiw-text">
            Via de AI-bot of digitale agenda - buiten kantooruren of tijdens
            drukke momenten.
          </p>
        </article>

        <article className="hiw-card">
          <div className="hiw-number">02</div>
          <h3 className="hiw-title">AI stelt tijdslot voor</h3>
          <p className="hiw-text">
            De bot analyseert de vraag en controleert real-time beschikbaarheid
            in je agenda.
          </p>
        </article>

        <article className="hiw-card">
          <div className="hiw-number">03</div>
          <h3 className="hiw-title">Directe bevestiging</h3>
          <p className="hiw-text">
            Afspraak wordt automatisch vastgelegd en gesynchroniseerd met je
            interne systeem.
          </p>
        </article>

        <article className="hiw-card">
          <div className="hiw-number">04</div>
          <h3 className="hiw-title">Automatische herinneringen</h3>
          <p className="hiw-text">
            Klant ontvangt bevestiging en herinneringen via hun voorkeurskanaal
            (SMS/email).
          </p>
        </article>
      </div>
    </>
  );
}
