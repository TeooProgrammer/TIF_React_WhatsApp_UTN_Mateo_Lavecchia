import React from 'react'
function SearchForm({ value, onChange, placeholder = 'Buscar' }) {
  return (
    <label className="search-box">
      <span className="sr-only">Buscar</span>
      <span aria-hidden="true">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

export default SearchForm
