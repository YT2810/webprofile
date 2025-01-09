// app/components/ProjectsSection.tsx
'use client'

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '40px' }}>
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>Project 1</strong>: breve descripción <br />
          <a href="https://tu-proyecto1.com" target="_blank" rel="noreferrer">
            Ver Proyecto
          </a>
        </li>
        <li>
          <strong>Project 2</strong>: breve descripción <br />
          <a href="https://tu-proyecto2.com" target="_blank" rel="noreferrer">
            Ver Proyecto
          </a>
        </li>
      </ul>
    </section>
  )
}
