"use client"

import '../styles/MeuComponente.css';
import { WiDayCloudy } from "react-icons/wi";

type props = {
    titulo:string,
    preco?: number,
    descricao?:string,
    imagem?:string
    funcao?: () => void;
}

function alertaDeCompra(){
    alert("Comprar")
}

export default function Product({titulo,preco,descricao,imagem,funcao}:props){
  return (
    <div className="rounded-sm flex-col p-3 bg-white w-50 ">
        <div className="">
            <img className="foto"  src={imagem} alt="" />
        </div>
        <h1 className=""> {titulo} </h1>
        <h3 className="bg-green-500"> {preco} </h3>
        <hr className="pb-5 text-gray-300" />

        <div>
            <p>{descricao}</p>
        </div>

        <div className="p-2 ">
            <button onClick={alertaDeCompra} className="bg-[#63335A]  p-2 text-amber-50 w-40 rounded-md">
                Comprar
            </button>
        </div>
    </div>
  );
}
