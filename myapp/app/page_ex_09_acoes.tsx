"use client"

import './style.css'
import { FaPlusSquare } from 'react-icons/fa';
import { useState } from "react"
import Link from 'next/link';

export default function Index(){
    const [lista, setLista] = useState<string[]>([])

    const [nome, setNome] = useState("")

    function add(){

        if( nome !== "" ){
            setLista([...lista, nome]) //lista pega tudo o que tinha antes e adiciona o conteúdo do nome (append)
        }else{
            alert("Descreva uma tarefa!!!");
        }
    }
    
    return(
        <>
        <div className="flex flex-col bg-pink-100 w-2xl">

            <h1 className="pt-10 text-center">To do List</h1>

            <div className="p-5 flex justify-center">
                <input className="p-2 bg-white w-2xs rounded-2xl" placeholder="Digite a sua tarefa" type="text" onChange={ (e) => setNome(e.target.value) } />
                <Link onClick={add} className='flex items-center p-2 rounded-2xl ml-4 bg-green-500 btn-submit' href={"#"}> <FaPlusSquare /> <p className='ml-2'>Add</p> </Link>
                    
            </div>

            <div className="p-5 bg-green-100 w-2xl">
                {lista.map( (item, index) => (
                // USAR  KEY ==== CADA DIV DEVE SER ÚNICA --- ENTÃO USAMOS O KEY COMO INDEXADOR 
                <div className="flex "  key={(index)} >

                    <p> {index+1}  - {item} </p>

                    <hr />
                    
                </div>
            ) ) }

            </div>

        </div>
        
        </>
    )
}