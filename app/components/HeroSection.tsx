// app/components/HeroSection.tsx
'use client'

export default function HeroSection() {
  // Verificamos si estamos en producción y agregamos el basePath si es necesario
  const isProd = process.env.NODE_ENV === 'production'; // Verifica si estamos en producción
  const basePath = isProd ? '/webprofile' : ''; // Establece el basePath solo en producción

  return (
    <section id="hero" className="hero">
      {/* Tagline */}
      <p className="heroTagline">
        <strong>Empowering businesses through Web3 and decentralized innovation.</strong>
      </p>

      {/* Botones CTA */}
      <div className="heroCTA">
        <a href= {`${basePath}/CV_EN.pdf`} download className="btn">Download CV</a>
        <a href="#contact" className="btnSecondary">Contact Me</a>
      </div>
    </section>
  )
}
