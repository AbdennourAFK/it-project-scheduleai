export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-item">
        <div className="stats-value">24/7</div>
        <div className="stats-label">Beschikbaarheid</div>
      </div>
      <div className="stats-item">
        <div className="stats-value">100%</div>
        <div className="stats-label">Foutloze synchronisatie</div>
      </div>
      <div className="stats-item">
        <div className="stats-value">0</div>
        <div className="stats-label">Dubbele boekingen</div>
      </div>
    </div>
  );
}
