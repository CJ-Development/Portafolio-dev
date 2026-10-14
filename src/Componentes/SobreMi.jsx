import '../Estilos/SobreMi.css';

export default function SobreMi() {
  return (
    <div className="sobre-wrapper">
      <div className="sobre-grid">
        <div className="sobre-texto">
          <span className="badge-pill">Perfil Profesional</span>
          <h2 className="section-title">Sobre mí</h2>
          <h3 className="sobre-nombre">Jhon Jairo Cortes Sarmiento</h3>
          <p className="sobre-rol">Desarrollador de Software · Full-Stack</p>

          <p className="sobre-parrafo">
            <strong>Tecnólogo en Análisis y Desarrollo de Software</strong> con experiencia en 
            desarrollo web full-stack (Django, JavaScript, React), manejo de bases de datos relacionales 
            y no relacionales (MySQL, MongoDB, Supabase, PostgreSQL) y control de versiones con Git.
          </p>

          <p className="sobre-parrafo">
            He participado en el desarrollo de aplicaciones funcionales bajo <strong>metodologías ágiles (Scrum)</strong>, 
            aplicando buenas prácticas de calidad de código y pruebas unitarias. Me caracterizo por el compromiso 
            con el aprendizaje continuo, la resolución efectiva de problemas y el trabajo en equipo.
          </p>

          {/* TARJETAS RÁPIDAS DE HIGHLIGHTS */}
          <div className="sobre-highlights">
            <div className="highlight-card">
              <strong>Full-Stack</strong>
              <p>Django, React & JavaScript</p>
            </div>

            <div className="highlight-card">
              <strong>Experiencia Real</strong>
              <p>Chemonics International Inc.</p>
            </div>

            <div className="highlight-card">
              <strong>Formación</strong>
              <p>Tecnólogo SENA (ADSO)</p>
            </div>

            <div className="highlight-card">
              <strong>Ubicación</strong>
              <p>Soacha, Cundinamarca</p>
            </div>
          </div>

          <div className="sobre-acciones">
            <a href="#proyectos" className="sobre-btn sobre-btn--primario">
              Ver Proyectos
            </a>
            <a href="#experiencia" className="sobre-btn sobre-btn--secundario">
              Ver Experiencia
            </a>
            <a href="#contacto" className="sobre-btn sobre-btn--outline">
              Contáctame
            </a>
          </div>
        </div>

        {/* AVATAR */}
        <div className="sobre-avatar">
          <div className="avatar-circle-wrapper">
            <div className="avatar-circle">
              <span>JC</span>
            </div>
            <div className="avatar-badge">
              <span className="vibrant-green-dot"></span>
              Disponible para proyectos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
