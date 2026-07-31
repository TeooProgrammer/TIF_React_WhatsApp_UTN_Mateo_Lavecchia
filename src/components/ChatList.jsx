import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar.jsx'

function ChatList({ chats }) {
  if (chats.length === 0) {
    return <p className="empty-state">No se encontraron conversaciones.</p>
  }

  return (
    <ul className="chat-list">
      {chats.map((chat) => (
        <li key={chat.id}>
          <Link className="chat-card" to={`/chat/${chat.id}`}>
            <Avatar initials={chat.initials} color={chat.color} />
            <span className="chat-card__body">
              <span className="chat-card__topline">
                <strong>{chat.name}</strong>
                <time>{chat.time}</time>
              </span>
              <span className="chat-card__preview">
                <span>{chat.lastMessage}</span>
                {chat.unread > 0 && (
                  <span className="unread" aria-label={`${chat.unread} mensajes sin leer`}>
                    {chat.unread}
                  </span>
                )}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ChatList
