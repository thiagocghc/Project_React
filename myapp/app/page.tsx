import { userProps } from "@/tipos"

export default async function Index(){

    const response = await fetch(`${process.env.API_ROUTE}/api/users`)

    const data : userProps[] = await response.json()
    console.log(data)

    return(
        <>

        {data.map((item) => (
            <div key={item.id}>
                <p> Nome: {item.name} email: {item.email}  senha: {item.senha} </p>
            </div>

        ))}

        </>
    )
}