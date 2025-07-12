"use client"
import Area from "@/componentes/Area";
import { hello, ola } from "@/funcoes/hello";

export default function Index(){
    return(
        <>
        <div className="flex h-screen bg-gray-300 justify-center items-center">
           
            <Area titulo="Área do Usuário" acao={ola}>
               <p className="pb-3.5"> Texto que veio do banco </p>
            </Area>

        </div>
        </>
    )
}