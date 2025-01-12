'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [showCVMenu, setShowCVMenu] = useState(false);

  const handleToggleCV = () => {
    setShowCVMenu(!showCVMenu);
  };

  return (
    <aside className="sidebar">
      {/* Foto y nombre */}
      <div className="profile">
        <Image
          src="blob/main/public/img/profile.jpg"
          alt="Mi Foto de Perfil"
          width={120}
          height={120}
          style={{ borderRadius: '50%' }}
        />
        <h2 style={{ marginTop: '10px' }}>YOLFRY E. TUBIÑEZ M.</h2>
        <p>Blockchain Consultant || Web3 Developer || Digital Strategy Expert</p>
      </div>

      {/* Navegación */}
      <nav className="navLinks">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Dropdown para CV */}
      <div className="cvDropdown">
        <button 
          className="cvButton"
          onClick={handleToggleCV}
        >
          Download CV
        </button>

        {/* Si showCVMenu es true, añadimos la clase 'show' */}
        <ul className={`cvMenu ${showCVMenu ? 'show' : ''}`}>
          <li>
            <a href="/CV_EN.pdf" download>English</a>
          </li>
          <li>
            <a href="/CV_ES.pdf" download>Español</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
