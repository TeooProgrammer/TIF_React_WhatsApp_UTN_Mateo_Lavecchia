import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="centered-page">
      <section className="not-found-card">
        <p className="error-code">404</p>
        <h1>Página no encontrada</h1>
        <p>La dirección ingresada no pertenece a esta aplicación.</p>
        <Link className="primary-link" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default NotFoundPage
