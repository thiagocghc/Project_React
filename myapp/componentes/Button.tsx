type props = {
    color: "azul" | "vermelho" | "verde"
    texto: string
    subtitulo? : string
    funcao?: () => void
}

export default function Button({color,texto,funcao}:props){
    let corBase = "";

    switch(color){
        case "azul":
            corBase = "bg-blue-500"
            break;
        default:
            corBase = "bg-red-500"
            break;
    }

    return(
        <button onClick={funcao} className={`${corBase}`}> {texto} </button>
    )
}