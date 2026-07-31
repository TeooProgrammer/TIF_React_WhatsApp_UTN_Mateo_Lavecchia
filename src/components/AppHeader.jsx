import React from 'react'
import { NavLink } from 'react-router-dom'
import whatsappLogo from '../assets/whatsapp-logo.svg'

function AppHeader() {
  return (
    <header className="app-header">
      <NavLink className="brand" to="/" aria-label="Ir a chats">
        <img className="brand__logo" src={whatsappLogo} alt="WhatsApp" />
      </NavLink>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Chats</NavLink>
        <NavLink to="/contactos">Contactos</NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
      </nav>
    </header>
  )
}

export default AppHeader
