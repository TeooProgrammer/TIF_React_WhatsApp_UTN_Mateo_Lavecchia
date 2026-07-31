import React from 'react'
import PageLayout from '../components/PageLayout.jsx'

function AboutPage() {
  return (
    <PageLayout>
      <section className="content-card about-page">
        <p className="eyebrow">Trabajo Integrador Final - Mateo Lavecchia</p>
        <h1>Acerca de Connect</h1>
        <p>
          App de mensajería inspirada en WhatsApp Web. Desarrollada con React y organizada en componentes reutilizables.
        </p>

        <div className="feature-grid">
          <article>
            <h2>React y estado</h2>
            <p>Los chats, contactos, formularios y mensajes se administran mediante estados.</p>
          </article>
          <article>
            <h2>Context API</h2>
            <p>La información compartida se centraliza para evitar repetir lógica entre páginas.</p>
          </article>
          <article>
            <h2>React Router</h2>
            <p>La app utiliza rutas, parámetros dinámicos y parámetros de búsqueda.</p>
          </article>
          <article>
            <h2>Responsive</h2>
            <p>El diseño se adapta a celulares, tablets y pantallas de escritorio.</p>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}

export default AboutPage
