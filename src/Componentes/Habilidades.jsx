import '../Estilos/Habilidades.css';

const categoriasHabilidades = [
  {
    titulo: 'Lenguajes',
    descripcion: 'Lenguajes de programación para frontend, backend y scripting',
    skills: ['Python', 'JavaScript', 'PHP', 'C#'],
  },
  {
    titulo: 'Frameworks / Backend',
    descripcion: 'Tecnologías y librerías para aplicaciones modernas y escalables',
    skills: ['Django', 'React', 'Vite', 'HTML', 'CSS'],
  },
  {
    titulo: 'Bases de datos',
    descripcion: 'Motores de bases de datos relacionales y no relacionales',
    skills: ['MySQL', 'MongoDB', 'Supabase', 'PostgreSQL'],
  },
  {
    titulo: 'Herramientas y metodologías',
    descripcion: 'Buenas prácticas, flujos ágiles e inteligencia artificial',
    skills: [
      'Claude',
      'APIs REST',
      'Scrum',
      'Pruebas de software',
      'Análisis de requerimientos',
    ],
  },
  {
    titulo: 'Despliegue e infraestructura web',
    descripcion: 'Puesta en producción, dominios, DNS y control de versiones',
    skills: [
      'Vercel',
      'Git',
      'GitHub',
      'Configuración de dominios y DNS',
      'Integración de variables de entorno',
    ],
  },
];

export default function Habilidades() {
  return (
    <div className="habilidades-wrapper">
      <div className="habilidades-header">
        <span className="badge-pill">Stack Técnico</span>
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Competencias técnicas organizadas según especialidad, herramientas y metodologías de trabajo.
        </p>
      </div>

      <div className="habilidades-grid">
        {categoriasHabilidades.map((cat, idx) => (
          <div className="hab-categoria-card" key={idx}>
            <div className="hab-card-top">
              <h3 className="hab-cat-titulo">{cat.titulo}</h3>
            </div>
            <p className="hab-cat-desc">{cat.descripcion}</p>
            <div className="hab-tags">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="hab-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
