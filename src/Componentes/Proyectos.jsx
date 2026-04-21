import '../Estilos/Proyectos.css';

const proyectos = [
  {
    id: 1,
    nombre: 'IZEL',
    descripcion: 'Proyecto personal desarrollado de la forma más real posible, con el objetivo de ser implementado en una EPS real. Plataforma web que centraliza el agendamiento de citas, gestión de pacientes, doctores y horarios, con autenticación y control de acceso por roles',
    tecnologias: ['React', 'React Router DOM', 'CSS', 'Vite', 'JavaScript', 'Django', 'DRF', 'JWT', 'PostgreSQL', 'Cloudinary', 'Railway'],
    link: 'https://izel-nine.vercel.app/',
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    descripcion: 'Proximamente proyecto colegios / Factus.',
    tecnologias: ['React', 'CSS'],
    link: '#',
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
