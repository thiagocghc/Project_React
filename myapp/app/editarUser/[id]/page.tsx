import FormularioUser from "@/componentes/formUser";
import db from '@/app/api/database';

export default async function Index({params}:{params:Promise<{id:string}>}){

    const {id} = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)

    const data = await response.json()

    console.log(data)

    return(
        <>
        <h1>Editar {id}</h1>

        <FormularioUser id={data.id} nome={data.nome} senha={data.senha} cpf={data.cpf} fone={data.fone}  />
        </>
    )
}