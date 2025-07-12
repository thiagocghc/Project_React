"use client"

import Card from "@/componentes/Card"
import Footer from "@/componentes/Footer"
import Header from "@/componentes/Header"

function redirect(){
    alert("CLICOU")
}

export default function Main(){
    return(
        <>
            <Header/>
            <div className="flex h-full justify-center items-center bg-gray-200 p-6">
                 
                <Card titulo="Card 1" conteudo=" Texto do conteúdo 1" funcao={redirect}/>
                <Card titulo="Card 2" conteudo=" Texto do conteúdo 2" funcao={redirect}/>
                <Card titulo="Card 3" conteudo=" Texto do conteúdo 3" funcao={redirect}/>
                <Card titulo="Card 4" conteudo=" Texto do conteúdo 4" funcao={redirect}/>
    
            </div>

            <div className="absolute w-full bottom-0">
                <Footer/>
            </div>
            
        </>  
    )

}