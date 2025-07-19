"use client"

import TextButton from "@/componentes/TextButton";
import TextoPadrao from "@/componentes/TextoPadrao";
import { useState } from "react";


export default function Home(){

    const [texto, setTexto] = useState<boolean>(false)  //Use state do tipo Boolean

    
    function show(){
        if(texto == false){
            setTexto(true);
        }else{
            setTexto(false);
        }
        
    }

    return(
        <>

        <TextButton funcao={show} texto="Clique"></TextButton>

        {texto ? <TextoPadrao/> : <p></p>}
        
        </>
    )

}