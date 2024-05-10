import React from 'react'
import { useState } from 'react'

export const HomePage = ({valor = 10}) => {
    const [contador, setContador] = useState(valor)

    const handleClick = ({target}) => {
        if (target.name=="dec")
            setContador(contador -1)
        else
            setContador(contador +1)
    }

    return (

    <>
    <h1>HomePage</h1>
    <h2>contador</h2>
    <p>Aqui tenemos un contador simple</p>
    <h3>{contador}</h3>
    <button onClick={handleClick} name="dec">Decrementar</button>
    <button onClick={() => setContador(valor)} name="res">Reset</button>
    <button onClick={handleClick} name="inc">Incrementar</button>
    </>
  )
}
