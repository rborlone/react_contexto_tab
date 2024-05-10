import React, {useState} from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  const [logged, setLogged] = useState(false)
  const [nombre, setNombre] = useState("Rodrigo")

  const iniciarCerrarSesion = () => {
    setLogged(!logged)
  }

  return (
    <UserContext.Provider value={{iniciarCerrarSesion, logged, nombre, setNombre}}>
        { children }
    </UserContext.Provider>
  )
}
