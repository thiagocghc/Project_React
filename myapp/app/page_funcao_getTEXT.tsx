"use client"
import { useState } from "react"

export default function Main(){

    const [texto, setTexto] = useState("")

    
    return(

        <>
        <input onChange={(e) => setTexto(e.target.value)} className="bg-amber-200 rounded-2xl " type="text" placeholder="Digite seu nome"/>

        <p> Olá: {texto} </p>
        </>

    )
}