'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="contactSection">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:tu.correo@dominio.com">tu.correo@dominio.com</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">
          linkedin.com/in/tu-usuario
        </a>
      </p>
      
      {/* Si quieres poner el botón (o menú) de CV aquí, podrías hacerlo */}
      <div className="cvButtonsContainer">
        <a href="/CV_en.pdf" download className="cvButton">Download CV (EN)</a>
        <a href="/CV_es.pdf" download className="cvButton">Descargar CV (ES)</a>
      </div>
    </section>
  )
}

