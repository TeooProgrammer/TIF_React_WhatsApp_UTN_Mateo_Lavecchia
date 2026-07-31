import React, { useState } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import SearchForm from '../components/SearchForm.jsx'
import ChatList from '../components/ChatList.jsx'
import { useChat } from '../context/ChatContext.jsx'

function HomePage() {
  const { chats } = useChat()
  const [search, setSearch] = useState('')
  const totalUnread = chats.reduce(
    (total, chat) => total + chat.unread,
    0,
  )

  const filteredChats = chats.filter((chat) =>
    `${chat.name} ${chat.lastMessage}`.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <PageLayout>
      <section className="whatsapp-shell" aria-label="Aplicación de mensajería">
        <aside className="chat-sidebar" aria-labelledby="chats-title">
          <div className="sidebar-heading">
            <div>
              <p className="eyebrow">WhatsApp</p>
              <h1 id="chats-title">Chats</h1>
            </div>
            <span className="chat-count">{totalUnread}</span>
          </div>

          <SearchForm
            value={search}
            onChange={setSearch}
            placeholder="Buscar o empezar un chat nuevo"
          />

          <div className="chat-filters" aria-label="Filtros de conversaciones">
            <button className="filter-chip filter-chip--active" type="button">
              Todos
            </button>
          </div>

          <ChatList chats={filteredChats} />
        </aside>

        <section className="empty-chat-panel" aria-label="Panel de conversación">
          <div className="empty-chat-illustration" aria-hidden="true">
            ✓
          </div>
          <h2>WhatsApp Web</h2>
          <p>Seleccioná una conversación para comenzar a enviar mensajes.</p>
          <small>🔒 Tus mensajes están cifrados de extremo a extremo.</small>
        </section>
      </section>
    </PageLayout>
  )
}

export default HomePage