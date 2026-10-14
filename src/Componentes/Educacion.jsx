import '../Estilos/Educacion.css';

const educacion = [
  {
    institucion: 'SENA (Servicio Nacional de Aprendizaje)',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    periodo: '2024 – 2026',
    tipo: 'Educación Superior / Tecnológica',
    descripcion:
      'Formación técnica superior en análisis, diseño y desarrollo web full-stack, ingeniería de requerimientos, modelado de bases de datos relacionales y no relacionales, pruebas de software y metodologías ágiles (Scrum).',
  },
  {
    institucion: 'SENA (Servicio Nacional de Aprendizaje)',
    titulo: 'Técnico en Recursos Humanos',
    periodo: '2021 – 2022',
    tipo: 'Educación Técnica',
    descripcion:
      'Formación en administración del talento humano, comunicación organizacional asertiva, resolución de conflictos y coordinación de equipos de trabajo.',
  },
];

export default function Educacion() {
  return (
    <div className="educacion-wrapper" id="conocimientos">
      <div className="educacion-header">
        <span className="badge-pill">Formación y Estudios</span>
        <h2 className="section-title">Mi Educación</h2>
        <p className="section-subtitle">
          Trayectoria académica y certificaciones técnicas que respaldan mis conocimientos.
        </p>
      </div>

      <div className="educacion-timeline">
        {educacion.map((item, i) => (
          <div className="edu-timeline-item" key={i}>
            <div className="edu-timeline-dot"></div>
            <div className="edu-timeline-content">
              <div className="edu-content-top">
                <span className="edu-timeline-periodo">{item.periodo}</span>
                <span className="edu-tipo-badge">{item.tipo}</span>
              </div>
              <h3 className="edu-timeline-titulo">{item.titulo}</h3>
              <p className="edu-timeline-inst">{item.institucion}</p>
              <p className="edu-timeline-desc">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
