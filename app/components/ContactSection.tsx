'use client'

export default function ContactSection() {
// Verificamos si estamos en producción y agregamos el basePath si es necesario
const isProd = process.env.NODE_ENV === 'production'; // Verifica si estamos en producción
const basePath = isProd ? '/webprofile' : ''; // Establece el basePath solo en producción

  return (
    <section id="contact" className="contactSection">
      <h2>Contact Me</h2>
      <div className="contactIcons">
        <a href="https://www.linkedin.com/in/yolfryt/" target="_blank" rel="noopener noreferrer">
          <img src={`${basePath}/img/LinkedIn.png`} alt="LinkedIn" />
        </a>
        <a href="https://x.com/yolfry" target="_blank" rel="noopener noreferrer">
          <img src={`${basePath}/img/x.png`} alt="X (Twitter)" />
        </a>
        <a href="https://github.com/YT2810" target="_blank" rel="noopener noreferrer">
          <img src={`${basePath}/img/github.png`} alt="GitHub" />
        </a>
      </div>
    </section>
  )
}
