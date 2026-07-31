import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import MessageBubble from '../components/MessageBubble.jsx'
import MessageForm from '../components/MessageForm.jsx'
import { useChat } from '../context/ChatContext.jsx'

function ChatPage() {
  const { chatId } = useParams()
  const { chats, sendMessage, markAsRead } = useChat()
  const chat = chats.find((item) => item.id === Number(chatId))
  useEffect(() => {
    if (chat) {
      markAsRead(chat.id)
    }
  }, [chatId])
  if (!chat) {
    return (
      <main className="centered-page">
        <section className="not-found-card">
          <h1>Conversación no encontrada</h1>
          <Link className="primary-link" to="/">Volver a los chats</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="chat-page">
      <section className="chat-window" aria-labelledby="chat-title">
        <header className="chat-header">
          <Link className="back-link" to="/" aria-label="Volver a las conversaciones">←</Link>
          <Avatar initials={chat.initials} size="small" color={chat.color} />
          <div>
            <h1 id="chat-title">{chat.name}</h1>
            <p>{chat.status}</p>
          </div>
        </header>

        <ol className="message-list" aria-label="Mensajes de la conversación">
          {chat.messages.length === 0 ? (
            <li className="conversation-start">Iniciá la conversación con {chat.name}.</li>
          ) : (
            chat.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))
          )}
        </ol>

        <MessageForm onSend={(text) => sendMessage(chat.id, text)} />
      </section>
    </main>
  )


}

export default ChatPage
