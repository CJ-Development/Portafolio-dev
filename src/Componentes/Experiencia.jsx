import '../Estilos/Experiencia.css';

const experiencias = [
  {
    empresa: 'Chemonics International Inc. – Sucursal Colombia',
    rol: 'Aprendiz / Apoyo en Desarrollo de Software',
    periodo: 'Julio 2025 – Enero 2026',
    tipo: 'Prácticas / Experiencia Laboral',
    ubicacion: 'Colombia',
    logros: [
      'Construí una página web de gestión para el SENA con PHP, Django y MySQL, logrando centralizar y agilizar los registros administrativos de la sede.',
      'Desarrollé la lógica de un videojuego en Unity (C#) bajo metodología Scrum, cumpliendo a tiempo con todas las entregas del proyecto.',
      'Resolví incidentes de soporte (Nivel 2 y 3) en Windows y Active Directory, asegurando la continuidad del servicio y aplicando pruebas con Git.',
    ],
    tecnologias: [
      'PHP',
      'Django',
      'MySQL',
      'Unity (C#)',
      'Scrum',
      'Git',
      'Windows',
      'Active Directory',
      'Pruebas de software',
    ],
  },
];

export default function Experiencia() {
  return (
    <div className="experiencia-wrapper">
      <div className="experiencia-header">
        <span className="badge-pill">Trayectoria Profesional</span>
        <h2 className="section-title">Experiencia Laboral</h2>
        <p className="section-subtitle">
          Experiencia práctica en desarrollo de software, resolución de incidentes y trabajo en equipo ágil.
        </p>
      </div>

      <div className="experiencia-timeline">
        {experiencias.map((exp, idx) => (
          <div className="exp-card" key={idx}>
            <div className="exp-card-header">
              <div className="exp-info-principal">
                <span className="exp-periodo-badge">{exp.periodo}</span>
                <h3 className="exp-rol">{exp.rol}</h3>
                <h4 className="exp-empresa">{exp.empresa}</h4>
              </div>
              <span className="exp-tipo-tag">{exp.tipo}</span>
            </div>

            <div className="exp-divider"></div>

            <div className="exp-contenido">
              <h5 className="exp-subtitulo">Responsabilidades y Logros Clave:</h5>
              <ul className="exp-logros-lista">
                {exp.logros.map((logro, lIdx) => (
                  <li key={lIdx} className="exp-logro-item">
                    {logro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-divider"></div>

            <div className="exp-tecnologias">
              <span className="exp-tec-label">Tecnologías y Entornos:</span>
              <div className="exp-tags">
                {exp.tecnologias.map((tec, tIdx) => (
                  <span key={tIdx} className="exp-tag">
                    {tec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
