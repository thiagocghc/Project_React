type props = {
    titulo: string;
    conteudo: string;
    funcao?: () => void
}

export default function Card({titulo,conteudo,funcao}:props){
  return(
    <div style={{ boxShadow: '.5px .5px 1px gray' }} onClick={funcao} className="flex flex-col w-2xs h-90 mt-15 mb-45 mx-2 rounded-2xl p-4 bg-white">
        <h1 className="pb-1.5 font-bold"> {titulo} </h1>
        <p> {conteudo} </p>
    </div>
  );
}
