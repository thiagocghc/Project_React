import Person from "@/componentes/Person";

//PROPRIEDADES DOS DADOS RECEBIDOS PELA API
type person = {
    id:number,
    name:string,
    status:string,
    species:string,
    gender:string,
    image:string,
    location:[]
}

export default async function Home(){

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json()

    const avatar : person[] = data.results;

    //console.log(avatar)
   

    return(
        <>
        <div className="p-5 bg-gray-100 gap-2 flex flex-wrap">
                {avatar.map( (personagem) => (
                           
                 <div className="shadow-md" key={personagem.id}>

                    <Person  id={personagem.id} name={personagem.name} image={personagem.image} status={personagem.status}  /> 
                </div>
            ))}
        </div>
        </>
    )
}