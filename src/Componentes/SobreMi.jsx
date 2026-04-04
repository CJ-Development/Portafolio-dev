import '../Estilos/SobreMi.css';

const educacion = [
  {
    institucion: 'SENA',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    periodo: '2024 – 2026',
    descripcion: 'Formación técnica en desarrollo de software, bases de datos, y metodologías ágiles.',
  },
  {
    institucion: 'Autodidacta',
    titulo: 'Desarrollo Frontend – React & Vite',
    periodo: '2025 – Presente',
    descripcion: 'Aprendizaje continuo en React, CSS avanzado, animaciones y buenas prácticas de UI/UX.',
  },
];

const habilidades = [
  'React', 'JavaScript', 'HTML5', 'CSS3',
  'Vite', 'Git', 'MySQL', 'Node.js',
];

export default function SobreMi() {
  return (
    <div className="sobre-wrapper">

      {/* SOBRE MÍ */}
      <div className="sobre-grid">
        <div className="sobre-texto">
          <h2 className="section-title">Sobre mí</h2>
          <p><strong>Jhon Jairo Cortes Sarmiento</strong></p>
          <p>
            Soy <strong>Desarrollador Web</strong>, apasionado por la tecnología y el aprendizaje continuo. Me gusta enfrentar nuevos retos que me permitan crecer profesionalmente y aportar soluciones creativas. Me caracterizo por mi responsabilidad, compromiso y capacidad para trabajar en equipo, siempre buscando mejorar y compartir conocimientos
          </p>
          <p>
            Actualmente me encuentro buscando oportunidades donde pueda aportar mis habilidades
            y seguir creciendo profesionalmente en el mundo del desarrollo web.
          </p>
          <div className="habilidades">
            {habilidades.map((h) => (
              <span key={h} className="tag">{h}</span>
            ))}
          </div>
        </div>

        {/* FOTO */}
        <div className="sobre-avatar">
          <div className="avatar-circle">
            <span>JC</span>
          </div>
        </div>
      </div>

      {/* MI EDUCACIÓN */}
      <div className="educacion-bloque" id="conocimientos">
        <h2 className="section-title" style={{ marginBottom: '32px' }}>Mi Educación</h2>
        <div className="timeline">
          {educacion.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-periodo">{item.periodo}</span>
                <h3 className="timeline-titulo">{item.titulo}</h3>
                <p className="timeline-inst">{item.institucion}</p>
                <p className="timeline-desc">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
