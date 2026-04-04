import Encabezado from '../Componentes/Encabezado';
import SobreMi from '../Componentes/SobreMi';
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
          <h1 className="hero-title">Web Developer</h1>
          <div className="hero-line" />
          <p className="hero-sub">Desarrollador Junior</p>
          <span className="hero-scroll">Scroll para conocerme ↓</span>
        </div>
      </section>

      {/* ══ SECCIÓN 2: SOBRE MÍ ══ */}
      <section id="sobre_mi" className="seccion">
        <SobreMi />
      </section>

      {/* ══ SECCIÓN 3: MIS PROYECTOS ══ */}
      <section id="proyectos" className="seccion">
        <Proyectos />
      </section>

      {/* ══ SECCIÓN 4: CONTACTAME ══ */}
      <section id="contacto" className="seccion">
        <Contacto />
      </section>
    </div>
  );
}
