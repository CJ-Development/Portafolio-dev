import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Estilos/Contacto.css'; 

// ─── valores de EmailJS ───────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ───────────────────────────────────────────────

export default function Contacto() {
  const [form, setForm]       = useState({ nombre: '', email: '', mensaje: '' });
  const [estado, setEstado]   = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('enviando');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.email,
          message:    form.mensaje,
          title:      'Nuevo mensaje desde el portafolio',
        },
        EMAILJS_PUBLIC_KEY
      );
      setEstado('ok');
      setForm({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setEstado('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setEstado('error');
      setTimeout(() => setEstado('idle'), 5000);
    }
  };

  const btnTexto = {
    idle:     'Enviar mensaje',
    enviando: 'Enviando...',
    ok:       '✓ Enviado',
    error:    '✗ Reintentar',
  }[estado];

  return (
    <div className="contacto-wrapper">
      <h2 className="section-title">Contáctame</h2>
      <p className="section-subtitle">Estoy disponible para nuevos proyectos y oportunidades</p>

      <div className="contacto-grid">

        {/* INFO */}
        <div className="contacto-info">
          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <p className="info-label">Celular / WhatsApp</p>
              <p className="info-value">
                <a href="tel:3125278094">312 527 8094</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <p className="info-label">Correo</p>
              <p className="info-value">
                <a href="mailto:jhoncortes876@gmail.com">jhoncortes876@gmail.com</a>
              </p>
              <p className="info-value">
                <a href="mailto:jhonjairocortes06@gmail.com">jhonjairocortes06@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <p className="info-label">Ubicación</p>
              <p className="info-value">Soacha, Cundinamarca</p>
            </div>
          </div>

          <div className="contacto-social">
            <a
              href="https://github.com/CJ-Development"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* FORMULARIO */}
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              disabled={estado === 'enviando'}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              required
              disabled={estado === 'enviando'}
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              placeholder="Cuéntame sobre tu proyecto..."
              value={form.mensaje}
              onChange={handleChange}
              required
              disabled={estado === 'enviando'}
            />
          </div>

          <button
            type="submit"
            className={`form-btn${estado === 'error' ? ' form-btn--error' : ''}`}
            disabled={estado === 'enviando'}
          >
            {btnTexto}
          </button>

          {estado === 'ok'    && <p className="form-success">¡Mensaje enviado! Te responderé pronto.</p>}
          {estado === 'error' && <p className="form-error">Hubo un error. Intenta de nuevo.</p>}
        </form>

      </div>
    </div>
  );
}
