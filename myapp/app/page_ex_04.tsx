"use client"

import ListaFrutas from "@/componentes/Listas"
import Produto from "@/componentes/Produto"

function comprar(){
    alert("Comprar")
}

export default function Index(){
    return(
        <div className="h-screen bg-[#F2F2F2]">
            <div className= "bg-[#63335A]">
                <h1 className="text-center text-white font-bold pb-20">Produtos</h1>
            </div>
            <div className="p-6 flex items-center justify-center gap-2"> 
                <Produto titulo="NIKE" tamanho={39} preco={299} funcao={comprar}>
                    <div >
                        <img className="rounded-sm" src="/images.jfif" alt="Foto do produto" />
                    </div>
                </Produto>

                 <Produto titulo="ADIDAS"  tamanho={40} preco={499} funcao={comprar}>
                    <div >
                        <img className="rounded-sm" src="/adidas.png" alt="Foto do produto" />
                    </div> 
                </Produto>
            </div>  

            <ListaFrutas/>          
        </div>
    )
}