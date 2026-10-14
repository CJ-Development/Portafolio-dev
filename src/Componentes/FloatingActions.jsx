import WhatsAppButton from './WhatsAppButton';
import CVButton from './CVButton';
import '../Estilos/FloatingActions.css';

export default function FloatingActions() {
  return (
    <div className="floating-actions-wrapper">
      {/* Botón flotante de WhatsApp arriba */}
      <WhatsAppButton />
      {/* Botón de descargar CV abajo */}
      <CVButton />
    </div>
  );
}
