import { userProps } from "@/tipos"
import Link from "next/link"

export default async function Index(){

    const response = await fetch(`${process.env.API_ROUTE}/api/users`)

    const data : userProps[] = await response.json()
    console.log(data)

    return(
        <>

        <Link href="/cadastro">Cadastrar Usuário</Link>

        {data.map((item) => (
            <div key={item.id}>
                <p> Nome: {item.name} email: {item.email}  senha: {item.senha} </p>
            </div>

        ))}

        </>
    )
}