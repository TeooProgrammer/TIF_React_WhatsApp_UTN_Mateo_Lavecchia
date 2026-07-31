import React from 'react'
import { useState } from 'react'

function NewContactForm({ onAdd }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const added = onAdd(name, phone)
    if (!added) {
      setFeedback('Completá el nombre y el teléfono.')
      return
    }

    setName('')
    setPhone('')
    setFeedback('Contacto agregado correctamente.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Nuevo contacto</h2>

      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Ejemplo: María Pérez"
      />

      <label htmlFor="phone">Teléfono</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Ejemplo: 2966 555-000"
      />

      <button type="submit">Agregar contacto</button>
      {feedback && <p className="form-feedback" role="status">{feedback}</p>}
    </form>
  )
}

export default NewContactForm
