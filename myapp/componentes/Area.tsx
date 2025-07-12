type props = {
    titulo: string;
    children: React.ReactNode;
    acao: () => void;
}

export default function Area({titulo,children,acao}:props){
    return(
        <div className="flex-col rounded-md p-6 w-1/2 bg-amber-50">
            <h1 className="text-blue-800 pb-2.5 font-extrabold"> {titulo} </h1>
                {children}      
            <button onClick={acao} className="bg-blue-500 p-3 text-amber-100 w-50 rounded-md">Executar ação</button>
        </div>
    )
}