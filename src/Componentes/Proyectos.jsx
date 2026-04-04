import '../Estilos/Proyectos.css';

const proyectos = [
  {
    id: 1,
    nombre: 'IZEL',
    descripcion: 'Sistema médico para agendar citas. Gestión de pacientes, doctores y horarios en una sola plataforma.',
    tecnologias: ['React', 'Node.js', 'MySQL'],
    link: '#',
    repo: '#',
  },
  {
    id: 2,
    nombre: 'Portafolio Dev',
    descripcion: 'Portafolio personal desarrollado con React + Vite. Incluye fondo animado con Vanta.js y modo claro/oscuro.',
    tecnologias: ['React', 'Vite', 'Vanta.js'],
    link: '#',
    repo: 'https://github.com/CJ-Development/Portafolio-dev',
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    descripcion: 'Descripción breve de tu próximo proyecto. Puedes actualizar esta tarjeta cuando lo tengas listo.',
    tecnologias: ['React', 'CSS'],
    link: '#',
    repo: '#',
  },
];

export default function Proyectos() {
  return (
    <div className="proyectos-wrapper">
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Algunos de los proyectos en los que he trabajado</p>

      <div className="proyectos-grid">
        {proyectos.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-header">
              <span className="card-icon">◈</span>
              <h3 className="card-title">{p.nombre}</h3>
            </div>
            <p className="card-desc">{p.descripcion}</p>
            <div className="card-tags">
              {p.tecnologias.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="card-links">
              <a href={p.link} className="card-btn">Ver Proyecto</a>
              <a href={p.repo} className="card-btn card-btn--ghost">Código</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
