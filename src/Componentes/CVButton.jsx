import { useState } from 'react';
import '../Estilos/CVButton.css';

export default function CVButton() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);

    // Disparar descarga del PDF
    const link = document.createElement('a');
    link.href = '/Curriculum_Jhon_Cortes.pdf';
    link.download = 'Curriculum_Jhon_Cortes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reiniciar animación tras 3.3 segundos
    setTimeout(() => {
      setDownloading(false);
    }, 3300);
  };

  return (
    <div className="installer" title="Descargar Hoja de Vida">
      <label htmlFor="progressCV" onClick={handleDownload}>
        <input
          id="progressCV"
          type="checkbox"
          checked={downloading}
          onChange={() => {}}
        />
        <span></span>
      </label>
    </div>
  );
}
