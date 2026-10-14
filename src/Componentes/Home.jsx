import Encabezado from '../Componentes/Encabezado';
import SobreMi from '../Componentes/SobreMi';
import Experiencia from '../Componentes/Experiencia';
import Habilidades from '../Componentes/Habilidades';
import Educacion from '../Componentes/Educacion';
import Proyectos from '../Componentes/Proyectos';
import Contacto from '../Componentes/Contacto';
import '../Estilos/Home.css';

export default function Home({ darkMode, setDarkMode }) {
  return (
    <div className="page-wrapper">
      {/* NAVBAR FIJO */}
      <Encabezado darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ══ SECCIÓN 1: HERO ══ */}
      <header id="inicio" className="seccion seccion--hero" role="banner">
        <div className="hero-content">
          <span className="hero-greeting">Hola, soy Jhon Jairo Cortes</span>
          <h1 className="hero-title">Desarrollador de Software</h1>
          <div className="hero-line" />
          <p className="hero-sub">Full-Stack · Django & React · Freelance</p>
          <div className="hero-badges">
            <span className="hero-chip">Python</span>
            <span className="hero-chip">JavaScript</span>
            <span className="hero-chip">Django</span>
            <span className="hero-chip">React</span>
            <span className="hero-chip">MySQL & PostgreSQL</span>
          </div>
          <div className="hero-actions">
            <a href="#proyectos" className="hero-btn-primary">
              Ver Mis Proyectos
            </a>
            <a href="#sobre_mi" className="hero-btn-secondary">
              Conoce mi trayectoria ↓
            </a>
          </div>
          {/* Texto semántico SEO — solo visible para crawlers y lectores de pantalla */}
          <p className="sr-only">
            Portafolio profesional de Jhon Jairo Cortes Sarmiento, desarrollador de software
            freelance y programador web en Colombia. Especializado en desarrollo de páginas web,
            aplicaciones web, tiendas en línea y e-commerce. Disponible como freelancer para
            proyectos de diseño web, creación de páginas web profesionales y desarrollo de
            software a medida. Contrata un desarrollador web freelance con experiencia real
            en React, Django, Python y JavaScript.
          </p>
        </div>
      </header>

      {/* ══ SECCIÓN 2: SOBRE MÍ ══ */}
      <section id="sobre_mi" className="seccion" aria-label="Sobre mí">
        <SobreMi />
      </section>

      {/* ══ SECCIÓN 3: EXPERIENCIA LABORAL ══ */}
      <section id="experiencia" className="seccion" aria-label="Experiencia laboral">
        <Experiencia />
      </section>

      {/* ══ SECCIÓN 4: HABILIDADES ══ */}
      <section id="habilidades" className="seccion" aria-label="Habilidades técnicas">
        <Habilidades />
      </section>

      {/* ══ SECCIÓN 5: EDUCACIÓN Y FORMACIÓN ══ */}
      <section id="educacion" className="seccion" aria-label="Educación y formación">
        <Educacion />
      </section>

      {/* ══ SECCIÓN 6: MIS PROYECTOS ══ */}
      <section id="proyectos" className="seccion" aria-label="Portafolio de proyectos">
        <Proyectos />
      </section>

      {/* ══ SECCIÓN 7: CONTACTAME ══ */}
      <section id="contacto" className="seccion" aria-label="Contacto y contratación freelance">
        <Contacto />
      </section>
    </div>
  );
}
