import { useState } from "react"

//TIPANDO OS DADOS RECEBIDOS PELA API
type userProps = {
    id:number,
    name:string,
    username:string,
    email:string
}

export default async function Home(){
    //CHAMADA DE API ---- CONSUMIR DADOS
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
   
    //userPros[] lista de objetos do tipo userProps
    const data : userProps[] = await response.json()

    //console.log(data)

    return(
        <>
            {data.map( (item) => (
                <div key={(item.id)}> 

                    <h1> {item.id} | { item.name } | {item.username} | {item.email} </h1>

                </div>
            ) )}
        </>
    )
}
