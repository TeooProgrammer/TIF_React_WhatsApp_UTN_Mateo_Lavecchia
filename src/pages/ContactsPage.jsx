import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'
import Avatar from '../components/Avatar.jsx'
import SearchForm from '../components/SearchForm.jsx'
import NewContactForm from '../components/NewContactForm.jsx'
import { useChat } from '../context/ChatContext.jsx'

function ContactsPage() {
  const { contacts, addContact, startChat } = useChat()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.phone}`.toLowerCase().includes(query.toLowerCase()),
  )

  function handleSearch(value) {
    const nextParams = new URLSearchParams(searchParams)
    if (value.trim()) {
      nextParams.set('q', value)
    } else {
      nextParams.delete('q')
    }
    setSearchParams(nextParams)
  }

  function handleStartChat(contact) {
    const id = startChat(contact)
    navigate(`/chat/${id}`)
  }

  return (
    <PageLayout>
      <section className="contacts-layout" aria-labelledby="contacts-title">
        <div className="content-card">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Agenda</p>
              <h1 id="contacts-title">Contactos</h1>
            </div>
          </div>

          <SearchForm
            value={query}
            onChange={handleSearch}
            placeholder="Buscar por nombre o teléfono"
          />

          <p className="query-info">
            {query ? `Resultados para “${query}”` : 'Todos los contactos'}
          </p>

          <ul className="contact-list">
            {filteredContacts.map((contact) => (
              <li className="contact-item" key={contact.id}>
                <Avatar initials={contact.initials} size="small" />
                <span>
                  <strong>{contact.name}</strong>
                  <small>{contact.phone}</small>
                </span>
                <button type="button" onClick={() => handleStartChat(contact)}>
                  Chatear
                </button>
              </li>
            ))}
          </ul>

          {filteredContacts.length === 0 && (
            <p className="empty-state">No hay contactos que coincidan con la búsqueda.</p>
          )}
        </div>

        <aside className="content-card">
          <NewContactForm onAdd={addContact} />
        </aside>
      </section>
    </PageLayout>
  )
}

export default ContactsPage
