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
      <section id="inicio" className="seccion seccion--hero">
        <div className="hero-content">
          <span className="hero-greeting">Hola, soy Jhon Jairo Cortes</span>
          <h1 className="hero-title">Desarrollador de Software</h1>
          <div className="hero-line" />
          <p className="hero-sub">Full-Stack · Django & React</p>
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
        </div>
      </section>

      {/* ══ SECCIÓN 2: SOBRE MÍ ══ */}
      <section id="sobre_mi" className="seccion">
        <SobreMi />
      </section>

      {/* ══ SECCIÓN 3: EXPERIENCIA LABORAL ══ */}
      <section id="experiencia" className="seccion">
        <Experiencia />
      </section>

      {/* ══ SECCIÓN 4: HABILIDADES ══ */}
      <section id="habilidades" className="seccion">
        <Habilidades />
      </section>

      {/* ══ SECCIÓN 5: EDUCACIÓN Y FORMACIÓN ══ */}
      <section id="educacion" className="seccion">
        <Educacion />
      </section>

      {/* ══ SECCIÓN 6: MIS PROYECTOS ══ */}
      <section id="proyectos" className="seccion">
        <Proyectos />
      </section>

      {/* ══ SECCIÓN 7: CONTACTAME ══ */}
      <section id="contacto" className="seccion">
        <Contacto />
      </section>
    </div>
  );
}
