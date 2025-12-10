const features = [
  {
    title: "Dubbele Boekingsoptie",
    text: "Klanten kunnen boeken via de AI-bot of de digitale agenda - altijd de meest gemakkelijke weg.",
    color: "orange"
  },
  {
    title: "24/7 AI Assistent",
    text: "De AI-bot handelt routinematige vragen af en stelt direct een gepast tijdslot voor.",
    color: "blue"
  },
  {
    title: "Conflictpreventie",
    text: "Real-time synchronisatie met je interne agenda maakt dubbele boekingen onmogelijk.",
    color: "purple"
  },
  {
    title: "Volledige Automatisering",
    text: "Directe bevestiging en herinneringen via SMS of e-mail voor je klanten.",
    color: "green"
  },
  {
    title: "Dashboard & Inzicht",
    text: "Centraal overzicht van alle boekingen met reden van afspraak voor optimale voorbereiding.",
    color: "pink"
  },
  {
    title: "Geen Administratieve Last",
    text: "Elimineer planningsfouten en bespaar uren per week aan telefoonbeheer.",
    color: "cyan"
  }
];

function colorClass(color) {
  switch (color) {
    case "orange":
      return "background: linear-gradient(135deg,#ff6a1a,#f97316);";
    case "blue":
      return "background: linear-gradient(135deg,#3b82f6,#22d3ee);";
    case "purple":
      return "background: linear-gradient(135deg,#a855f7,#ec4899);";
    case "green":
      return "background: linear-gradient(135deg,#22c55e,#4ade80);";
    case "pink":
      return "background: linear-gradient(135deg,#ec4899,#fb7185);";
    case "cyan":
      return "background: linear-gradient(135deg,#06b6d4,#0ea5e9);";
    default:
      return "";
  }
}

export default function FeatureOverview() {
  return (
    <>
      <div className="section-header">
        <div className="section-kicker">Alles wat je nodig hebt</div>
        <h2 className="section-title">Voor foutloze planning</h2>
        <p className="section-subtitle">
          SchedulAI combineert snelheid met betrouwbaarheid voor een naadloze
          boekingservaring.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div
              className="feature-icon"
              style={{ ...(colorClass(feature.color) && { background: "" }) }}
            >
              {/* kleur via inline style onderaan */}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
