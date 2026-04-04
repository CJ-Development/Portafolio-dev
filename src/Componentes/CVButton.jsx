import '../Estilos/CVButton.css';

export default function CVButton() {
  return (
    <a
      href="src\Descargables\Curriculum Jhon Jairo Cortes Sarmiento - ADSO.pdf"
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
