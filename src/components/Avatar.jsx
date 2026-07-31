import React from 'react'

function Avatar({ initials, size = 'normal', color }) {
  const className = size === 'small' ? 'avatar avatar--small' : 'avatar'

  return (
    <span className={className} style={color ? { backgroundColor: color } : undefined} aria-hidden="true">
      {initials}
    </span>
  )
}

export default Avatar
