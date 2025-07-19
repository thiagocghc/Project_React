"use client"
import Link from "next/link";
import { useState } from "react";


/*

FORMAS DE FAZER IF TERNÁRIO COM VARIÁVEL BOOLEANA

const [mostrarTexto, setMostrarTexto] = useState(true)

{mostrarTexto ? <p> Texto visível </p> : <p>  </p> }

function Alternar(){
	setMostrarTexto(!mostrarTexto)
}

*/

export default function Index(){
    const [contador, setContador] = useState(0)

    return(
        <div>
            <h1>contador: {contador} </h1> <Link href={"/produtos"}> Vá pra lá </Link>
            
            <button onClick={ () => setContador(contador + 1) }> AAAAA </button>
        </div>
    )
}