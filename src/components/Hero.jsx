import "./Hero.css";

const NODES = [
  { label: "Virtualization", angle: -90 },
  { label: "Networking", angle: -18 },
  { label: "Cloud & Endpoint", angle: 54 },
  { label: "Disaster Recovery", angle: 126 },
  { label: "Security", angle: 198 },
];

const CENTER = { x: 240, y: 240 };
const RADIUS = 168;
const NODE_R = 30;

const toXY = (angleDeg) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER.x + RADIUS * Math.cos(rad),
    y: CENTER.y + RADIUS * Math.sin(rad),
  };
};

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow mono">
            IT Infrastructure &amp; Network Administration
          </p>
          <h1 className="hero__title">Dessalew Yeshiwas</h1>
          <p className="hero__subtitle">
            I keep servers, networks, and cloud systems running reliably — most
            recently for Africa's largest hydropower construction site, now for
            remote and humanitarian teams.
          </p>

          <dl className="hero__stats">
            <div>
              <dt className="mono">13+ yrs</dt>
              <dd>in IT infrastructure</dd>
            </div>
            <div>
              <dt className="mono">12 yrs</dt>
              <dd>as IT Administrator, GERD Project</dd>
            </div>
            <div>
              <dt className="mono">MBA · MSc</dt>
              <dd>completed / in progress</dd>
            </div>
          </dl>

          <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:desuy26@gmail.com">
              Email me
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.linkedin.com/in/dessalew-yeshiwas-a16a1a95"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__diagram" aria-hidden="true">
          <svg viewBox="0 0 480 480" className="hero__svg">
            {NODES.map((node, i) => {
              const { x, y } = toXY(node.angle);
              return (
                <line
                  key={`line-${node.label}`}
                  className="hero__link"
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={x}
                  y2={y}
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              );
            })}

            {NODES.map((node) => {
              const { x, y } = toXY(node.angle);
              return (
                <g key={node.label} className="hero__node">
                  <circle cx={x} cy={y} r={NODE_R} />
                  <text x={x} y={y + NODE_R + 20} textAnchor="middle">
                    {node.label}
                  </text>
                </g>
              );
            })}

            <g className="hero__center">
              <circle cx={CENTER.x} cy={CENTER.y} r={44} />
              <text
                x={CENTER.x}
                y={CENTER.y + 5}
                textAnchor="middle"
                className="mono"
              >
                DY
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
