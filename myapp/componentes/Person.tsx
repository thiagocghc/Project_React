"use client"

import { link } from 'fs';
import '../styles/MeuComponente.css';
import { WiDayCloudy } from "react-icons/wi";
import Link from 'next/link';

type props = {
    id: number,
    name:string,
    status: string,
    species:string,
    type?:string,
    image?:string
    funcao?: () => void;
}

function alertaDeCompra(){
    alert("Comprar")
}

export default function Person({id,name,image,status,species,type,funcao}:props){
  return (
    <div className="rounded-sm flex-col p-3 bg-gray-900 w-50 ">
        <div className="">
            <img className="foto"  src={image} alt="" />
        </div>
        <h1 className="text-amber-50"> {name} </h1>
        <h3 className="text-amber-50">  {species} </h3>
        <hr className="pb-5 text-gray-300" />

        <div>
            <p className='text-amber-50 '>{status}</p>
        </div>

        <div className="p-2 ">
            <Link href={`/ricks/${id}`}>
                
            </Link>
            
        </div>
    </div>
  );
}
