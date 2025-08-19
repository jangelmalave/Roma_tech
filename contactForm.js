// Debes incluir React y ReactDOM vía CDN en tu HTML si no usas bundler:
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

const { useState } = React;

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulación de envío: en producción usar backend o servicio de correo
    fetch('https://formspree.io/f/mnqepjql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
        _replyto: 'jangelmalave@gmail.com'
      })
    }).then(() => setEnviado(true));
  };

  if (enviado) {
    return <p>¡Gracias por contactarnos! Te responderemos pronto.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Nombre:
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Mensaje:
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

ReactDOM.render(<ContactForm />, document.getElementById('react-root'));