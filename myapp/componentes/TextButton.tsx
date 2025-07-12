
type props = {
    texto:string;
    funcao: () => void
}

export default function TextButton({texto,funcao}:props){

    return(
        <button onClick={funcao} className="bg-green-600"> {texto} </button>
    )
}