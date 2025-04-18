'use client'
import { useState } from 'react'

export default function Sidebar() {
  // Verificamos si estamos en producción y agregamos el basePath si es necesario
  const isProd = process.env.NODE_ENV === 'production'; // Verifica si estamos en producción
  const basePath = isProd ? '/webprofile' : ''; // Establece el basePath solo en producción
  const [showCVMenu, setShowCVMenu] = useState(false);

  const handleToggleCV = () => {
    setShowCVMenu(!showCVMenu);
  };

  return (
    <aside className="sidebar">
      {/* Foto y nombre */}
      <div className="profile">
        <img
          src={`${basePath}/img/profile.jpg`}
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
            <a href={`${basePath}/CV_EN.pdf`} download>English</a>
          </li>
          <li>
            <a href={`${basePath}/CV_ES.pdf`} download>Español</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
