import { useState, useEffect } from 'react';
import '../Estilos/Proyectos.css';

const proyectoDestacado = {
  id: 1,
  nombre: 'Biomuebles',
  categoria: 'Renovación de imagen y experiencia digital',
  badge: 'Proyecto Destacado',
  descripcionCorta:
    'Renovación integral del frontend y presencia digital de Biomuebles, transformando una plataforma desactualizada en una experiencia moderna, intuitiva y orientada a la conversión.',
  descripcionCompleta: [
    'Biomuebles necesitaba renovar su presencia digital, ya que su interfaz anterior se encontraba desactualizada, presentaba problemas visuales y no representaba adecuadamente la variedad de servicios que ofrecía la empresa.',
    'La renovación del frontend permitió construir una experiencia más moderna, organizada e intuitiva, dando mayor visibilidad a sus servicios y facilitando el contacto con nuevos clientes. Además, la plataforma permite consultar los trabajos realizados, compartir opiniones y solicitar servicios de manera rápida y sencilla.',
    'El objetivo es conectar a Biomuebles con más personas, facilitar el acceso a sus soluciones para el hogar y reflejar la calidad de su trabajo, incluso más allá de su ubicación física.',
  ],
  tecnologias: ['React', 'Tailwind CSS', 'Vite', 'Supabase', 'SEO'],
  link: 'https://www.biomueblescolombia.com.co/',
  imagen: '/proyectos/biomuebles-preview.png',
  btnText: 'Ver sitio web',
};

const proyectosSecundarios = [
  {
    id: 2,
    nombre: 'IZEL',
    categoria: 'Salud & EPS Digital',
    tipo: 'salud',
    descripcionCorta:
      'Plataforma médica para agendamiento de citas, gestión de pacientes, doctores y horarios con autenticación y control por roles.',
    descripcionCompleta: [
      'Plataforma web médica desarrollada para ser implementada en una EPS real. Centraliza el agendamiento de citas, gestión de pacientes, doctores y horarios, con autenticación y control de acceso robusto por roles.',
      'Diseñada con frontend reactivo en React y backend escalable en Django Rest Framework, garantizando la seguridad en la gestión de historias clínicas y disponibilidad continua para el personal asistencial.',
    ],
    tecnologias: [
      'React',
      'Django',
      'DRF',
      'PostgreSQL',
      'JWT',
      'Vite',
      'Cloudinary',
      'Railway',
    ],
    link: 'https://izel-nine.vercel.app/',
    imagen: '/proyectos/izel-preview.png',
    btnText: 'Probar demo',
  },
  {
    id: 3,
    nombre: 'Baúl Mágico Shop',
    categoria: 'Expansión digital y comercio electrónico',
    tipo: 'ecommerce',
    descripcionCorta:
      'E-commerce completo enfocado en llevar el negocio más allá de su tienda física, fortalecer su marca digital e impulsar ventas sin límites geográficos.',
    descripcionCompleta: [
      'Baúl Mágico nació con el objetivo de llevar su negocio más allá de su tienda física y llegar a nuevos públicos sin límites geográficos. A partir de esta necesidad, desarrollé una plataforma de comercio electrónico enfocada en ampliar su alcance, fortalecer su presencia digital e impulsar las ventas de la tienda.',
      'El proyecto busca consolidar una marca más visible, accesible y competitiva, permitiendo que sus clientes descubran sus productos y realicen sus compras desde cualquier lugar, transformando las oportunidades del comercio digital en nuevas posibilidades de crecimiento.',
    ],
    tecnologias: [
      'React',
      'Tailwind CSS',
      'Vite',
      'Django',
      'DRF',
      'PostgreSQL',
    ],
    link: 'https://www.baulmagicoshop.com/',
    imagen: '/proyectos/baul-magico-preview.png',
    btnText: 'Ver sitio web',
  },
  {
    id: 4,
    nombre: 'MiVenta',
    categoria: 'Una nueva forma de vender en línea',
    tipo: 'ecommerce',
    descripcionCorta:
      'Plataforma de comercio integral para gestionar productos, pedidos y pagos ágiles, impulsando el emprendimiento sin depender de un local físico.',
    descripcionCompleta: [
      'MiVenta surgió de la idea de crear nuevas oportunidades comerciales a través de una plataforma digital que permitiera vender una amplia variedad de productos sin depender de un establecimiento físico propio.',
      'El proyecto busca ofrecer una solución integral para gestionar productos, administrar pedidos y facilitar el proceso de compra, brindando la flexibilidad necesaria para explorar diferentes mercados y ampliar las posibilidades de venta.',
      'Con MiVenta, la tecnología se convierte en una herramienta para impulsar el emprendimiento, aprovechar las oportunidades del comercio electrónico y construir un modelo de negocio con potencial de crecimiento y expansión.',
    ],
    tecnologias: [
      'React',
      'Tailwind CSS',
      'Vite',
      'Django',
      'DRF',
      'PostgreSQL',
    ],
    link: 'https://www.miventa.co/',
    imagen: '/proyectos/miventa-preview.png',
    btnText: 'Ver sitio web',
  },
];

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'salud', label: 'Salud & EPS' },
];

export default function Proyectos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [featuredExpandida, setFeaturedExpandida] = useState(false);
  const [descExpandida, setDescExpandida] = useState({});
  const [techsExpandidas, setTechsExpandidas] = useState({});

  const toggleDesc = (id) => {
    setDescExpandida((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTechs = (id) => {
    setTechsExpandidas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const proyectosFiltrados =
    filtroActivo === 'todos'
      ? proyectosSecundarios
      : proyectosSecundarios.filter((p) => p.tipo === filtroActivo);

  // Animación de entrada al hacer scroll (Intersection Observer)
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filtroActivo]);

  return (
    <div className="proyectos-wrapper">
      {/* Encabezado de la sección */}
      <div className="proyectos-header reveal-on-scroll">
        <span className="badge-pill">Portafolio</span>
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Proyectos reales de desarrollo web freelance: páginas web profesionales, plataformas de e-commerce, aplicaciones de salud y soluciones digitales a medida.
        </p>
      </div>

      {/* ══ 1. PROYECTO DESTACADO (HERO DE 2 COLUMNAS) ══ */}
      <div className="featured-card-wrapper reveal-on-scroll">
        <article className="featured-card">
          {/* Columna Izquierda: Captura Visual 16:9 */}
          <div
            className="featured-preview-container"
            role="button"
            tabIndex={0}
            onClick={() => window.open(proyectoDestacado.link, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(proyectoDestacado.link, '_blank', 'noopener,noreferrer');
              }
            }}
            aria-label={`Ver sitio web de ${proyectoDestacado.nombre}`}
          >
            <img
              src={proyectoDestacado.imagen}
              alt={`Captura del proyecto protagonista ${proyectoDestacado.nombre}`}
              className="featured-preview-img"
              loading="lazy"
            />
            <div className="preview-overlay">
              <span className="preview-pill">
                {proyectoDestacado.btnText} ↗
              </span>
            </div>
          </div>

          {/* Columna Derecha: Información Completa */}
          <div className="featured-info">
            <div className="featured-top-row">
              <span className="featured-badge">
                <span className="featured-dot" />
                {proyectoDestacado.badge}
              </span>
              <span className="featured-category">
                {proyectoDestacado.categoria}
              </span>
            </div>

            <h3 className="featured-title">{proyectoDestacado.nombre}</h3>

            <div className="featured-desc">
              {/* En escritorio se muestra completo */}
              <div className="featured-desc-desktop">
                {proyectoDestacado.descripcionCompleta.map((parrafo, idx) => (
                  <p key={idx}>{parrafo}</p>
                ))}
              </div>

              {/* En celular se reduce el texto y permite expandir con botón igual que los secundarios */}
              <div className="featured-desc-mobile">
                {featuredExpandida ? (
                  <>
                    {proyectoDestacado.descripcionCompleta.map((parrafo, idx) => (
                      <p key={idx}>{parrafo}</p>
                    ))}
                    <button
                      type="button"
                      className="desc-toggle-btn"
                      onClick={() => setFeaturedExpandida(false)}
                    >
                      Mostrar menos ↑
                    </button>
                  </>
                ) : (
                  <>
                    <p>{proyectoDestacado.descripcionCorta}</p>
                    <button
                      type="button"
                      className="desc-toggle-btn"
                      onClick={() => setFeaturedExpandida(true)}
                    >
                      Conocer más detalles ↓
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="featured-techs">
              <span className="techs-label">Tecnologías:</span>
              <div className="techs-list">
                {proyectoDestacado.tecnologias.map((tech) => (
                  <span className="tag tag-featured" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="featured-actions">
              <a
                href={proyectoDestacado.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn featured-btn"
              >
                {proyectoDestacado.btnText} ↗
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* ══ 2. BARRA DE FILTROS & TÍTULO DE PROYECTOS SECUNDARIOS ══ */}
      <div className="secondary-section-header reveal-on-scroll">
        <div className="secondary-header-title">
          <h3 className="secondary-title">Más proyectos desarrollados</h3>
          <span className="secondary-counter">({proyectosFiltrados.length})</span>
        </div>

        {/* Filtros funcionales */}
        <div className="filter-tabs" role="tablist" aria-label="Filtrar proyectos">
          {filtros.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filtroActivo === f.id}
              className={`filter-btn ${filtroActivo === f.id ? 'is-active' : ''}`}
              onClick={() => setFiltroActivo(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══ 3. CUADRÍCULA DE PROYECTOS SECUNDARIOS (3 COLUMNAS) ══ */}
      <div className="proyectos-grid">
        {proyectosFiltrados.map((p, idx) => {
          const estaExpandida = descExpandida[p.id];
          const estanTechsExpandidas = techsExpandidas[p.id];
          const techsVisibles = estanTechsExpandidas
            ? p.tecnologias
            : p.tecnologias.slice(0, 4);
          const techsRestantes = p.tecnologias.length - 4;

          return (
            <article
              className="card secondary-card reveal-on-scroll"
              key={p.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Previsualización 16:9 */}
              <div
                className="card-preview"
                role="button"
                tabIndex={0}
                onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(p.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                aria-label={`Acceder al proyecto ${p.nombre}`}
              >
                <div className="preview-image-container">
                  <img
                    src={p.imagen}
                    alt={`Captura real de ${p.nombre}`}
                    className="preview-image"
                    loading="lazy"
                  />
                  <div className="preview-overlay">
                    <span className="preview-pill">
                      {p.btnText} ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* Categoría */}
              <div className="card-meta">
                <span className="card-category">{p.categoria}</span>
                {p.tipo === 'salud' && (
                  <span className="tag-demo-disponible">Demo online</span>
                )}
              </div>

              {/* Título */}
              <div className="card-header">
                <h4 className="card-title">{p.nombre}</h4>
              </div>

              {/* Descripción breve con mecanismo de expansión */}
              <div className="card-desc">
                {estaExpandida ? (
                  <>
                    {p.descripcionCompleta.map((parrafo, pIdx) => (
                      <p key={pIdx}>{parrafo}</p>
                    ))}
                    <button
                      type="button"
                      className="desc-toggle-btn"
                      onClick={() => toggleDesc(p.id)}
                    >
                      Mostrar menos ↑
                    </button>
                  </>
                ) : (
                  <>
                    <p>{p.descripcionCorta}</p>
                    <button
                      type="button"
                      className="desc-toggle-btn"
                      onClick={() => toggleDesc(p.id)}
                    >
                      Conocer más detalles ↓
                    </button>
                  </>
                )}
              </div>

              {/* Tecnologías con indicador +N */}
              <div className="card-tags">
                {techsVisibles.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
                {techsRestantes > 0 && !estanTechsExpandidas && (
                  <button
                    type="button"
                    className="tag tag-more"
                    onClick={() => toggleTechs(p.id)}
                    title="Ver más tecnologías"
                  >
                    +{techsRestantes}
                  </button>
                )}
                {estanTechsExpandidas && (
                  <button
                    type="button"
                    className="tag tag-more"
                    onClick={() => toggleTechs(p.id)}
                    title="Ocultar tecnologías adicionales"
                  >
                    −
                  </button>
                )}
              </div>

              {/* Botón de acción único y directo a otra pestaña */}
              <div className="card-links">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn"
                >
                  {p.btnText} ↗
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
