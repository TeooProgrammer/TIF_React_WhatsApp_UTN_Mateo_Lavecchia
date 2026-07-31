import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat/:chatId" element={<ChatPage />} />
      <Route path="/contactos" element={<ContactsPage />} />
      <Route path="/acerca" element={<AboutPage />} />
      <Route path="/inicio" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
