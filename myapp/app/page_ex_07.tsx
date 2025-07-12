// USE STATE HOOK
//USE STATE --->>> CONTEÚDO MAIS IMPORTANTE DO REACT
// USE STATE --->> SÓ RODA NO LADO CLIENT, ENTAO DEVE CHAMAR O "use client"
"use client"

import { useState } from "react";

type usuario = {
    nome:string;
    idade:number;
}


export default function Home(){
    // [variável  ,  função_que_atualiza_variável ]
    const [contador , setContador ] = useState(0)

    const [usuario , setUsuario ] = useState<usuario>() 

    const [lista, setLista] = useState<[]>([])  //Use state do tipo lista, começa com uma lista vazia
    const [estado, setEstado] = useState<boolean>(false)  //Use state do tipo Boolean

    function incrementCounter(){
        setContador(contador + 1)
    }

    function decrementCounter(){
        contador > 0 ? setContador(contador - 1) : setContador(0)
    }

    return(
        <div>
            <p> {contador}  </p> 
            <button onClick={incrementCounter}> UP </button>
            <br />
            <button onClick={decrementCounter}> DOWN </button>
        </div>
    )
}