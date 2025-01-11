// app/components/HeroSection.tsx
'use client'

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      {/* Tagline */}
      <p className="heroTagline">
        <strong>Empowering businesses through Web3 and decentralized innovation.</strong>
      </p>

      {/* Botones CTA */}
      <div className="heroCTA">
        <a href="/CV_en.pdf" download className="btn">Download CV</a>
        <a href="#contact" className="btnSecondary">Contact Me</a>
      </div>
    </section>
  )
}
