import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const AcercaDePage = () => {

    const {nombre, setNombre} = useContext(UserContext)

    const handleOnChange = (evt) => {
        setNombre(evt.target.value);
    }

  return (
    <>
    <h1>AcercaDePage</h1>
    <h3>ingresa tu nombre</h3>
    <input type="text" value={nombre} onChange={handleOnChange}/>
    
    </>
  )
}
