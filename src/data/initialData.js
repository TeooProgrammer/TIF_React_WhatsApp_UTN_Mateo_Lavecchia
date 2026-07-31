export const initialChats = [
  {
    id: 1,
    name: 'Lucas Darío Tevez',
    initials: 'LT',
    status: 'En línea',
    lastMessage: 'dale, después te mando el archivo.',
    time: '16:42',
    unread: 2,
    color: '#7e57c2',
    messages: [
      { id: 1, text: 'hola, como venis con el trabajo?', author: 'contact', time: '16:31' },
      { id: 2, text: 'bien, estoy terminando la parte responsive', author: 'me', time: '16:36' },
      { id: 3, text: 'dale, despues te mando el archivo', author: 'contact', time: '16:42' },
    ],
  },
  {
    id: 2,
    name: 'Emanuel Alejandro Groppa',
    initials: 'EG',
    status: 'Última vez hoy a las 15:12',
    lastMessage: 'joya, lo reviso cuando llegue',
    time: '15:10',
    unread: 0,
    color: '#1976d2',
    messages: [
      { id: 1, text: 'te pasé el link del repositorio', author: 'me', time: '15:02' },
      { id: 2, text: 'de una, lo reviso cuando llegue', author: 'contact', time: '15:10' },
    ],
  },
  {
    id: 3,
    name: 'Hugo Antonio Frey Aguilar',
    initials: 'HF',
    status: 'En línea',
    lastMessage: 'nos vemos mañana en clases',
    time: '14:31',
    unread: 1,
    color: '#d81b60',
    messages: [
      { id: 1, text: 'pudiste probar el formulario?', author: 'contact', time: '14:20' },
      { id: 2, text: 'si, ya guarda los contactos', author: 'me', time: '14:27' },
      { id: 3, text: 'nos vemos mañana en clases', author: 'contact', time: '14:31' },
    ],
  },
  {
    id: 4,
    name: 'Grupo Front End',
    initials: 'FE',
    status: '4 participantes',
    lastMessage: 'subí los cambios al repo',
    time: 'Ayer',
    unread: 4,
    color: '#008069',
    messages: [
      { id: 1, text: 'revisaron el responsive?', author: 'contact', time: '13:55' },
      { id: 2, text: 'si, funciona desde 320px', author: 'me', time: '14:02' },
      { id: 3, text: 'subí los cambios al repo', author: 'contact', time: '14:10' },
    ],
  },
]

export const initialContacts = [
  { id: 101, name: 'Lucas Darío Tevez', phone: '2966 555-101', initials: 'LT' },
  { id: 102, name: 'Emanuel Alejandro Groppa', phone: '2966 555-102', initials: 'EG' },
  { id: 103, name: 'Hugo Antonio Frey Aguilar', phone: '2966 555-103', initials: 'HF' },
  { id: 104, name: 'Sofía Martínez', phone: '2966 555-104', initials: 'SM' },
]
