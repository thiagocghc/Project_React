type props = {
    children: React.ReactNode;
    titulo:string;
    preco: number;
    tamanho:number;
    funcao: () => void;
}

export default function Produto({titulo,preco,tamanho,children,funcao}:props){
  return (
    <div className="rounded-sm flex-col p-3 bg-white w-50 ">
        <div className="">
            <h1 className="text-center font-bold text-[#1A2D7E]  "> {titulo} </h1>
        </div>
        {children}
        <hr className="pb-5 text-gray-300" />

        <div className="flex-col justify-center">
            <h1 className="font-bold">$ {preco}</h1>
            
            <div className="flex w-6 items-center" >
                <p className="mr-2">Tamanho </p>
                <div className="rounded-full p-1 bg-[#E43690]">
                    <span className=""> {tamanho} </span>
                </div>
                
            </div>
        </div>

        <div className="p-2 ">
            <button onClick={funcao} className="bg-[#63335A]  p-2 text-amber-50 w-40 rounded-md">
                Comprar
            </button>
        </div>
    </div>
  );
}
