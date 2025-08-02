import { userProps } from "@/tipos"
import Link from "next/link"

export default async function Index(){

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
    const data : userProps[] = await response.json()
    console.log(data)

    return(
        <>

        <Link href="/cadastro">Cadastrar Usuário</Link>

        {data.map((item) => (
            <div key={item.id}>
                <p>Id: {item.id} Nome: {item.nome} email: {item.email}  senha: {item.senha} <Link className="bg-blue-500" href={`/editarUser/${item.id}`}>Editar Usuario</Link> </p>
            </div>

        ))}

        </>
    )
}