"use client"

import { useState } from "react"

export default function Index(){

    const [add,setAdd] = useState(0)
    const [mostrarBotao,setMostrarBotao] = useState(true)

    function adicionar(){
        setAdd(add + 1)
        setMostrarBotao(false)
    }

    function remover(){

        setMostrarBotao(true)
    }

    return (
        <>
        <p> Likes:  {add} </p>
        {mostrarBotao ? <button onClick={adicionar}> AAAA </button>  :  <button onClick={remover}> BBBB </button> }
        </>
    )

}