import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const LoginPage = () => {


    const {logged, iniciarCerrarSesion} = useContext(UserContext)
  return (
    <>
    <h1>LoginPage</h1>
    {logged ? <h1>Logeado</h1> : <h1>No logeado</h1>}
    <button onClick={iniciarCerrarSesion}>{logged ? "Cerrar Sesion" : "Iniciar Sesion"}</button>
    </>
  )
}
