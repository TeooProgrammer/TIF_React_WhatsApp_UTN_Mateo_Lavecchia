import React from 'react'
import { createContext, useContext, useState } from 'react'
import { initialChats, initialContacts } from '../data/initialData.js'

const ChatContext = createContext()

function getInitials(name) {
  return name
    .trim()
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(initialChats)
  const [contacts, setContacts] = useState(initialContacts)

  function sendMessage(chatId, text) {
    const cleanText = text.trim()
    if (!cleanText) return

    setChats((currentChats) =>
      currentChats.map((chat) => {
        if (chat.id !== Number(chatId)) return chat

        const newMessage = {
          id: Date.now(),
          text: cleanText,
          author: 'me',
          time: new Date().toLocaleTimeString('es-AR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        }

        return {
          ...chat,
          lastMessage: cleanText,
          time: newMessage.time,
          unread: 0,
          messages: [...chat.messages, newMessage],
        }
      }),
    )
  }

  function markAsRead(chatId) {
    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === Number(chatId)
          ? { ...chat, unread: 0 }
          : chat,
      ),
    )
  }

  const value = {
    chats,
    contacts,
    sendMessage,
    addContact,
    startChat,
    markAsRead,
  }

  function addContact(name, phone) {
    const cleanName = name.trim()
    const cleanPhone = phone.trim()
    if (!cleanName || !cleanPhone) return false

    setContacts((currentContacts) => [
      ...currentContacts,
      {
        id: Date.now(),
        name: cleanName,
        phone: cleanPhone,
        initials: getInitials(cleanName),
      },
    ])
    return true
  }

  function startChat(contact) {
    const existingChat = chats.find(
      (chat) => chat.name.toLowerCase() === contact.name.toLowerCase(),
    )

    if (existingChat) return existingChat.id

    const newChat = {
      id: Date.now(),
      name: contact.name,
      initials: contact.initials,
      status: contact.phone,
      lastMessage: 'Conversación nueva',
      time: 'Ahora',
      unread: 0,
      messages: [],
    }

    setChats((currentChats) => [newChat, ...currentChats])
    return newChat.id
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat debe utilizarse dentro de ChatProvider')
  }
  return context
}
