import React from 'react'
import { useState } from 'react'

function MessageForm({ onSend }) {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="message">Escribir mensaje</label>
      <input
        id="message"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Escribí un mensaje"
        autoComplete="off"
      />
      <button type="submit" aria-label="Enviar mensaje">Enviar</button>
    </form>
  )
}

export default MessageForm
