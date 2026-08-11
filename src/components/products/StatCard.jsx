import { TrendingUp } from 'lucide-react';

export default function StatCard({ label, value, delta, detail, icon, tone, chart }) {
  return (
    <article className="stat-card">
      <div className="stat-top"><span>{label}</span><span className={`stat-icon stat-icon--${tone}`}>{icon}</span></div>
      <div className="stat-value">{value}</div>
      <div className="stat-bottom"><span className={chart === 'warning' ? 'delta delta--warning' : 'delta'}>{chart !== 'warning' && <TrendingUp size={13} />}{delta}</span><span>{detail}</span></div>
      <div className={`mini-chart mini-chart--${chart}`} aria-hidden="true">
        {chart === 'bars' && [44, 67, 50, 78, 58, 84, 68].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        {chart === 'donut' && <span>1 240</span>}
        {chart === 'line' && <svg viewBox="0 0 160 34" preserveAspectRatio="none"><path d="M0 27 C18 29, 21 13, 39 19 S61 28, 78 15 S99 17, 115 10 S141 13, 160 2" /></svg>}
        {chart === 'warning' && <div className="warning-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>}
      </div>
    </article>
  );
}
