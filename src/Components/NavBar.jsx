import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

export const NavBar = () => {

    const {logged, nombre} = useContext(UserContext)

  return (
    <>
    {logged ? <div>{nombre}</div> : ''}

    <Link to="/">Home</Link>
    <Link to="/acerca">Acerca</Link>
    <Link to="login">Login</Link>
    </>
  )
}
