import '../Estilos/CVButton.css';

export default function CVButton() {
  return (
    <a
      href="/Curriculum_Jhon_Cortes.pdf"
      download
      className="cv-fab"
      title="Descargar CV"
      aria-label="Descargar CV"
    >
      <span className="cv-fab__label">Descargar CV</span>
      <span className="cv-fab__icon">⬇</span>
    </a>
  );
}
