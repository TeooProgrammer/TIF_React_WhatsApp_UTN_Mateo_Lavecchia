import React from 'react'
function MessageBubble({ message }) {
  const ownMessage = message.author === 'me'

  return (
    <li className={`message-row ${ownMessage ? 'message-row--own' : ''}`}>
      <article className={`message ${ownMessage ? 'message--own' : ''}`}>
        <p>{message.text}</p>
        <time>{message.time}</time>
      </article>
    </li>
  )
}

export default MessageBubble
