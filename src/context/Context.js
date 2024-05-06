import React from 'react'

const Context = React.createContext({
  theme: false,
  changeTheme: () => {},
  activeRoute: 'HOME',
  changeActiveRoute: () => {},
})

export default Context
